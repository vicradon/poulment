const Farm = require("../../models/farm");
const { isValidDate } = require("../../utils/date_funcs");


const resetDailyRecord = (req, res, next) => {
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
      const index = farm.days.findIndex(
        (day) => day.date.getDay() === new Date(date).getDay()
      );
      if (index) {
        farm.days.splice(index, 1);
        farm.save((err) => {
          if (err) throw new Error(err);
          res
            .status(200)
            .json({ message: "day's record successfully deleted" });
        });
      } else {
        res.status(404).json({ message: "day not found" });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resetDailyRecord,
};
