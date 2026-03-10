from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()

# Load model
model = joblib.load("model/model.pkl")

class Features(BaseModel):
    features: list[float]

@app.get("/")
def home():
    return {"message": "ML API running"}

@app.post("/predict")
def predict(data: Features):
    prediction = model.predict([data.features])
    return {"prediction": prediction.tolist()}