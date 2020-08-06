const isValidDate = (timestamp) => {
  return new Date(timestamp).getTime() > 0;
};

const getDayFromDate = (date) => {
  return new Date(date).getDate();
};

module.exports = { isValidDate, getDayFromDate };
