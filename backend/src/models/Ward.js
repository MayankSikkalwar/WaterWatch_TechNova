import mongoose from 'mongoose';

const wardSchema = new mongoose.Schema({
  wardId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true
  },
  area: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Ward = mongoose.model('Ward', wardSchema);
export default Ward;
