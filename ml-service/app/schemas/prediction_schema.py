from pydantic import BaseModel, Field

class PredictionRequest(BaseModel):
    population: float = Field(..., description="Total population of the ward")
    supply_hours: float = Field(..., description="Average daily water supply hours")
    complaints: float = Field(..., description="Total number of complaints in the ward")
    rainfall: float = Field(..., description="Amount of rainfall received")

class PredictionResponse(BaseModel):
    risk_score: float = Field(..., description="Calculated risk score between 0 and 1")
    risk_level: str = Field(..., description="Risk severity level (LOW, MEDIUM, HIGH)")

class FactorImpact(BaseModel):
    factor: str
    impact: float

class RootCauseResponse(BaseModel):
    top_factors: list[FactorImpact]
