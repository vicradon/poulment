const isNotNumber = (...items) => {
  const noNulls = Object.keys(items).filter((x) => {
    if (items[x] === null) {
      return x;
    }
  });

  const truthArr = noNulls.filter((x) => {
    if (typeof items[x] !== "number") {
      return true;
    }
  });
  if (truthArr.length > 0) return true;
  return false;
};

module.exports = isNotNumber;
