import mongoose from 'mongoose';

const tankerSchema = new mongoose.Schema({
  wardId: {
    type: String,
    required: true
  },
  allocatedTankers: {
    type: Number,
    required: true,
    default: 0
  },
  status: {
    type: String,
    enum: ['PENDING', 'DISPATCHED', 'DELIVERED'],
    default: 'PENDING'
  }
}, { timestamps: true });

const Tanker = mongoose.model('Tanker', tankerSchema);
export default Tanker;
