from app.models.model_loader import load_model
from app.utils.preprocessing import convert_to_dataframe

def explain_prediction(input_data: dict) -> list:
    """
    Returns the top contributing features for a given prediction.
    Uses model feature importances as a simple explanation baseline.
    """
    model = load_model()
    
    # Preprocess
    df = convert_to_dataframe(input_data)
    
    # Get global feature importances from XGBoost
    importances = model.feature_importances_
    features = df.columns.tolist()
    
    # Combine and sort by impact (highest first)
    factor_impacts = [{"factor": f, "impact": float(imp)} for f, imp in zip(features, importances)]
    factor_impacts = sorted(factor_impacts, key=lambda x: x["impact"], reverse=True)
    
    return factor_impacts
