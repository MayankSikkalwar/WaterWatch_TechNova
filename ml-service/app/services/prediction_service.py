from app.models.model_loader import load_model
from app.utils.preprocessing import convert_to_dataframe
from app.utils.feature_engineering import engineer_features

def predict_risk(input_data: dict) -> dict:
    """
    Predicts the risk score and determines the risk level.

    Risk Levels:
    0 - 0.4 -> LOW
    0.4 - 0.7 -> MEDIUM
    0.7 - 1.0 -> HIGH
    """
    model = load_model()
    
    # Preprocess
    df = convert_to_dataframe(input_data)
    df = engineer_features(df)
    
    # Predict
    prediction_raw = model.predict(df)[0]
    
    # Clip between 0 and 1
    risk_score = max(0.0, min(1.0, float(prediction_raw)))
    
    # Determine risk level
    if risk_score < 0.4:
        risk_level = "LOW"
    elif risk_score < 0.7:
        risk_level = "MEDIUM"
    else:
        risk_level = "HIGH"
        
    return {
        "risk_score": risk_score,
        "risk_level": risk_level
    }
