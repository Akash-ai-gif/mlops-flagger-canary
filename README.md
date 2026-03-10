# MLOps Canary Deployment with Kubernetes and Flagger

## Overview

This project demonstrates how to deploy a Machine Learning API using a safe **Canary Deployment strategy**.

The API is built using FastAPI and deployed to Kubernetes using Docker containers. Flagger manages progressive delivery and automatic rollback.

## Tech Stack

* Python
* FastAPI
* Docker
* Kubernetes
* Flagger

## Project Structure

mlops-flagger-project
│
├── app/
│   └── main.py
│
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ml-api-canary.yaml
│
├── Dockerfile
└── README.md

## Run Locally

Start deployment:

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ml-api-canary.yaml

Check pods:

kubectl get pods

Access API:

kubectl port-forward service/ml-api-service 8000:8000

Open browser:

http://localhost:8000/docs

## Example API Request

POST /predict

{
"features":[1,2,3,4]
}

Response:

{
"prediction":[2]
}

## Canary Deployment Process

1. Deploy new model version
2. Flagger gradually shifts traffic
3. Metrics are monitored
4. If metrics fail → automatic rollback
5. If metrics pass → promotion to production

## Author

Akash M
Robotics and Automation Engineering spcialization in AI and MLOps engg
