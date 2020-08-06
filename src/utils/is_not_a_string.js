const isNotAString = (...items) => {
  const noNulls = Object.keys(items).filter((x) => {
    if (items[x] === null) {
      return x;
    }
  });

  const truthArr = noNulls.filter((x) => {
    if (typeof items[x] !== "string") {
      return true;
    }
  });
  if (truthArr.length > 0) return true;
  return false;
};

module.exports = isNotAString;
