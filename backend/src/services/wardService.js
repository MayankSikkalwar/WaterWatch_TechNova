import Ward from '../models/Ward.js';

export const getAllWards = async () => {
  return await Ward.find({});
};

export const getWardById = async (wardId) => {
  return await Ward.findOne({ wardId });
};
