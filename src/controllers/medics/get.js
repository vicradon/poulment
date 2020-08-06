const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");

/**
 * Get recommended medication
 */

const getRecommendedMedication = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm id or owner id  not provided");
    }

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      res.status(200).json({
        "Recommended medication": farm.medics.recommendedMedication || "None yet",
        message: "Successfully fetched recommended Medication",
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRecommendedMedication,
};
