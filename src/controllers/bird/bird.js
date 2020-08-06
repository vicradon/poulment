const get = require("./get");
const patch = require("./patch.js");

module.exports = {
  ...get,
  ...patch
};
