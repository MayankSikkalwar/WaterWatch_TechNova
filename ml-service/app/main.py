from fastapi import FastAPI
from app.routes import predict, root_cause

app = FastAPI(
    title="WaterWatch ML Service",
    description="Microservice for predicting water scarcity risk and explaining root causes.",
    version="1.0.0"
)

# Register routers
app.include_router(predict.router, tags=["Prediction"])
app.include_router(root_cause.router, tags=["Explainability"])

@app.get("/")
def health_check():
    return {"status": "ok", "message": "WaterWatch ML Service is running."}
