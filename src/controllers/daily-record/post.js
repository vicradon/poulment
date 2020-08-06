const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");
const isNotAString = require("../../utils/is_not_a_string");
const isNotNumber = require("../../utils/is_not_number");
const isLessThanZero = require("../../utils/is_less_than_zero");
const { isValidDate } = require("../../utils/date_funcs");

/**
 * Post record for Date.now()
 */
const postDailyRecord = async (req, res, next) => {
  try {
    const { ownerId, id } = req.params;
    const {
      date,
      numberOfBirdsSold,
      numberOfEggsSold,
      deaths,
      newlySickBirds,
      newlyRecoveredBirds,
      numberOfEggsProduced,
      kgOfFeedConsumed,
      litersOfWaterConsumed,
      vaccination,
      currentMedication,
      feedingCosts,
      medicalCosts,
      waterCosts,
      otherCosts,
    } = req.body;

    if (!ownerId || !id) {
      throw new BadRequest("Owner id or farm id wasn't provided");
    }

    for (let i in req.body) {
      if (req.body[i] === undefined) {
        throw new BadRequest(`No data was supplied for ${i}`);
      }
    }

    const lessThanZero = isLessThanZero(
      numberOfBirdsSold,
      numberOfEggsSold,
      deaths,
      newlySickBirds,
      newlyRecoveredBirds,
      numberOfEggsProduced,
      kgOfFeedConsumed,
      litersOfWaterConsumed,
      feedingCosts,
      medicalCosts,
      waterCosts,
      otherCosts
    );
    const notNumber = isNotNumber(
      numberOfBirdsSold,
      numberOfEggsSold,
      deaths,
      newlySickBirds,
      newlyRecoveredBirds,
      numberOfEggsProduced,
      kgOfFeedConsumed,
      litersOfWaterConsumed,
      feedingCosts,
      medicalCosts,
      waterCosts,
      otherCosts
    );

    const containsNonString = isNotAString(vaccination, currentMedication);

    if (!isValidDate(date)) throw new BadRequest("Date is not valid");

    if (new Date(date).getDay() !== new Date().getDay())
      throw new BadRequest("Trying to post a record which isn't today");

    if (lessThanZero) {
      throw new BadRequest("One of the fields is less than zero");
    }

    if (notNumber) {
      throw new BadRequest("One of the fields is not a number");
    }

    if (containsNonString) {
      throw new BadRequest("One of the fields is not a string");
    }
    let dayAlreadyExists = false;

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      if (farm.days.length > 0) {
        if (
          farm.days[farm.days.length - 1].date.getDay() ===
          new Date(date).getDay()
        ) {
          dayAlreadyExists = true;
        }
      }
    });

    if (dayAlreadyExists) {
      throw new BadRequest("The day already exists");
    }

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) throw new Error(error);
      farm.days.push(req.body);
      farm.save((err) => {
        if (err) throw new Error(err);

        res
          .status(201)
          .json({ todaysRecord: farm.days[farm.days.length - 1], message: "Successfully added today's record" });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postDailyRecord,
};
