import pandas as pd
import xgboost as xgb
import joblib
import os

def train_and_save_model():
    # Load synthetic training data
    current_dir = os.path.dirname(__file__)
    data_path = os.path.join(current_dir, '../data/training_data.csv')
    model_path = os.path.join(current_dir, '../data/model.pkl')
    
    # Read CSV
    df = pd.read_csv(data_path)
    
    # Define features and target
    X = df[['population', 'supply_hours', 'complaints', 'rainfall']]
    y = df['risk_score']
    
    # Train primary model (XGBoost Regressor)
    # Using small synthetic data, configure basic hyperparams
    model = xgb.XGBRegressor(
        n_estimators=100, 
        learning_rate=0.1, 
        max_depth=3,
        random_state=42
    )
    
    model.fit(X, y)
    
    # Target rules configured conceptually in model: 
    # High population -> higher risk
    # Low supply -> higher risk
    # High complaints -> higher risk
    # High rainfall -> lower risk
    
    # Save the trained model to model.pkl
    joblib.dump(model, model_path)
    print(f"Model saved successfully to {model_path}")

if __name__ == "__main__":
    train_and_save_model()
