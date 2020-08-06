const income = require("./income");
const expense = require("./expense");
const balance = require("./balance");


module.exports = {
  ...income,
  ...expense,
  ...balance
};
