const get = require("./get");
const post = require("./post.js");

module.exports = {
  ...get,
  ...post,
};
