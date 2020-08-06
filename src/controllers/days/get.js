const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");
const { isValidDate, getDayFromDate } = require("../../utils/date_funcs");

/**
 * Get particular day
 */

const getDay = async (req, res, next) => {
  try {
    const { id, ownerId, date } = req.params;

    if (!id || !ownerId || !date) {
      throw new BadRequest("Farm id or owner id or date not provided");
    }

    if (!isValidDate(date)) throw new BadRequest("Date is not valid");

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      if (farm.days.length > 0) {
        const day = farm.days.find(
          (x) => new Date(x.date).getDay() === new Date(date).getDay()
        );

        if (day) {
          res
            .status(200)
            .json({ day: day, message: "Successfully retrieved day" });
        } else {
          res.status(404).json({ message: "Day does not exist" });
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all days
 */

const getDays = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm id or owner id not provided");
    }

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      if (farm.days.length > 0) {
        res.status(200).json({
          days: farm.days,
          message: "Successfully retrieved all days",
        });
      } else {
        res.status(404).json({ message: "No day yet" });
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get days in range
 */

const getDaysInRange = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm id or owner id not provided");
    }

    const { from, to } = req.query;

    if (!from || !to) {
      throw new BadRequest("'from' or 'to' was not provided");
    }

    if (!isValidDate(from)) throw new BadRequest("'from' is not a valid date");
    if (!isValidDate(to)) throw new BadRequest("'to' is not a valid date");

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      if (farm.days.length > 0) {
        const days = farm.days.filter((x) => {
          if (
            getDayFromDate(x.date) >= getDayFromDate(from) &&
            getDayFromDate(x.date) <= getDayFromDate(to)
          )
            return x;
        });

        res.status(200).json({
          days: days,
          message: "Successfully retrieved days in given range",
        });
      } else {
        res.status(404).json({ message: "No day yet" });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDay,
  getDays,
  getDaysInRange,
};
