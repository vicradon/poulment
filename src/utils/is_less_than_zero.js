const isLessThanZero = (...items) => {

  for (let i in items) {
    if (items[i] < 0) {
      return true;
    } 
  }
  return false;
};

module.exports = isLessThanZero;
