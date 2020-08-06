const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");
const { isValidDate } = require("../../utils/date_funcs");

/**
 * Post record for Date.now()
 */
const removeDailyRecord = async (req, res, next) => {
  try {
    const { ownerId, id } = req.params;

    if (!ownerId || !id) {
      throw new BadRequest("Owner id or farm id wasn't provided");
    }

    const { date } = req.body;

    if (!isValidDate(date)) throw new BadRequest("Date is not valid");

    if (new Date(date).getDay() !== new Date().getDay())
      throw new BadRequest("Trying to delete a record which isn't today");

    let dayDoesNotExists = false;
    let noDaysYet = false;

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      if (farm.days.length > 0) {
        if (
          farm.days[farm.days.length - 1].date.getDay() !==
          new Date(date).getDay()
        ) {
          console.log(9);
          dayDoesNotExists = true;
        }
      } else {
        noDaysYet = true;
      }
    });

    if (noDaysYet) {
      throw new BadRequest("There are no days yet");
    }

    if (dayDoesNotExists) {
      throw new BadRequest(
        "Trying to delete a record that doesn't exist, try creating it instead"
      );
    }

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);

      farm.days.pop();

      farm.save((err) => {
        if (err) throw new Error(err);
        res.status(200).json({ message: "Successfully delete today's record" });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  removeDailyRecord,
};
