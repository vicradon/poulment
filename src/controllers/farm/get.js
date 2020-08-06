const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");

/**
 * Get all farms
 */
const getAllFarms = async (req, res, next) => {
  try {
    const { ownerId } = req.params;
    if (!ownerId) {
      throw new BadRequest("Owner id wasn't provided");
    }
    Farm.find({ ownerId }, (error, farms) => {
      if (error) throw new Error(error);
      res.status(200).json({ farms, message: "Successfully retrieved farms" });
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get single farm
 */
const getFarm = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;
    Farm.find({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      if (farm === null) {
        res.status(404).json({ message: "farm not found" });
      }
      res.status(200).json({ farm });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFarms,
  getFarm,
};
