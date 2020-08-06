const get = require("./get");
const post = require("./post");
const patch = require("./patch.js");
const remove = require("./remove");

module.exports = {
  ...get,
  ...post,
  ...patch,
  ...remove
};
