import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  wardId: {
    type: String,
    required: true
  },
  complaintCount: {
    type: Number,
    required: true
  },
  complaintType: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Complaint = mongoose.model('Complaint', complaintSchema);
export default Complaint;
