import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,           // 5 virtual users
  duration: '1m',   // run for 1 minute
};

export default function () {
  // Send request in the format your ML API expects
  const payload = JSON.stringify({
    features: [5.1, 3.5, 1.4, 0.2]  // replace with any valid test input
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res = http.post('http://127.0.0.1:8000/predict', payload, params);

  // Check response
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has prediction': (r) => r.body.includes('prediction'),
  });

  sleep(1);
}