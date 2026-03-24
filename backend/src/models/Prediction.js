import mongoose from 'mongoose';

const predictionSchema = new mongoose.Schema({
  wardId: {
    type: String,
    required: true
  },
  riskScore: {
    type: Number,
    required: true
  },
  riskLevel: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Prediction = mongoose.model('Prediction', predictionSchema);
export default Prediction;
