const { GeneralError, NotFound } = require("../utils/error");

const handleError = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.code).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: err.message,
  });
};

module.exports = handleError;
