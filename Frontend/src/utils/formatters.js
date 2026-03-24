export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatWaterVolume = (liters) => {
  if (liters >= 1000000) {
    return `${(liters / 1000000).toFixed(2)} ML`;
  } else if (liters >= 1000) {
    return `${(liters / 1000).toFixed(1)} kL`;
  }
  return `${liters} L`;
};
