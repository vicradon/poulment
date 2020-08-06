const Farm = require("../../models/farm");
const { BadRequest, NotFound } = require("../../utils/error");
const { isValidDate } = require("../../utils/date_funcs");


/**
 * Get recommendations based on symptoms
 */

const getRecommendedMedication = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm or owner id not provided");
    }
    Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
      res.status(200).json({
        recommendedMedication: farm.medics.recommendedMedication,
        message: "recommended medication",
      });
    });
  } catch (error) {
    next(error);
  }
};

const getDailyRecord = (req, res, next) => {
  try {
    const { id, ownerId, date } = req.params;

    if (!id || !ownerId || !date) {
      throw new BadRequest("Farm or owner id or date not provided");
    }
    if (!isValidDate(date)) {
      throw new BadRequest("date is invalid");
    }

    Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
      if (err) throw new Error(err);
      const day = farm.days.find(
        (day) => day.date.getDay() === new Date(date).getDay()
      );
      if (day) {
        res.status(200).json({ day, message: "day found" });
      } else {
        res.status(404).json({ day, message: "day not found" });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllFarms,
  getFarm,
  getRecommendedMedication,
  getDailyRecord,
};
