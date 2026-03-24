import joblib
import os

_model = None

def load_model():
    """
    Loads and caches the trained XGBoost model from model.pkl.
    """
    global _model
    if _model is None:
        model_path = os.path.join(os.path.dirname(__file__), '../data/model.pkl')
        if not os.path.exists(model_path):
            raise FileNotFoundError("Model file model.pkl not found. Please run xgboost_model.py first.")
        _model = joblib.load(model_path)
    return _model
