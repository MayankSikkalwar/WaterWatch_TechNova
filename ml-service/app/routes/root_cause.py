from fastapi import APIRouter
from app.schemas.prediction_schema import PredictionRequest, RootCauseResponse
from app.services.explain_service import explain_prediction

router = APIRouter()

@router.post("/root-cause", response_model=RootCauseResponse)
def root_cause(request: PredictionRequest):
    """
    Endpoint to determine top factors causing water scarcity risk.
    """
    raw_input = request.dict()
    factors = explain_prediction(raw_input)
    return {"top_factors": factors}
