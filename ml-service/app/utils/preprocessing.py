import pandas as pd

def convert_to_dataframe(input_dict: dict) -> pd.DataFrame:
    """
    Converts a single dictionary input into a pandas DataFrame expected by the model.
    """
    # Keys must match the model's expected feature names
    df = pd.DataFrame([input_dict])
    return df
