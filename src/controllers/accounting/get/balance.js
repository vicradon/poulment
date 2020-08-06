const Farm = require("../../../models/farm");
const { BadRequest } = require("../../../utils/error");

/**
 * Get balance
 */

const getBalance = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm or owner id not provided");
    }
    Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
      if (err) throw new Error(err);
      res.status(200).json({
        birdInfo: farm.birdInfo,
        message: "bird information",
      });
    });
  } catch (error) {
    next(error);
  }
};

/**
 * One should not be able to alter/delete a previous day's input
 */

module.exports = {
  getBalance,
};
