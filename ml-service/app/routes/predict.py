from fastapi import APIRouter
from app.schemas.prediction_schema import PredictionRequest, PredictionResponse
from app.services.prediction_service import predict_risk

router = APIRouter()

@router.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest):
    """
    Endpoint to predict the water scarcity risk score and level.
    """
    raw_input = request.dict()
    result = predict_risk(raw_input)
    return result
