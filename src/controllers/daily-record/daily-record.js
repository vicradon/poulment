const post = require("./post");
const patch = require("./patch.js");
const remove = require("./remove");

module.exports = {
  ...post,
  ...patch,
  ...remove
};
