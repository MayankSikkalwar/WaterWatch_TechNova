import mongoose from 'mongoose';

const supplySchema = new mongoose.Schema({
  wardId: {
    type: String,
    required: true
  },
  avgSupplyHours: {
    type: Number,
    required: true
  },
  supplyFrequency: {
    type: String,
    required: true
  },
  totalWaterSupplied: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const Supply = mongoose.model('Supply', supplySchema);
export default Supply;
