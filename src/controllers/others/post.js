const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");
const { isValidDate } = require("../../utils/date_funcs");
const isLessThanZero = require("../../utils/is_less_than_zero");

/**
 *
 * If day exists in days, simply update
 * else, create the day, add the necessary data and save
 */

const updateDailyRecord = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;
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

    if (!isValidDate(date)) {
      throw new BadRequest("Date is not valid");
    }

    (checkIfLessThanZero = (...items) => {
      for (let i in items) {
        if (items[i] < 0) {
          throw new BadRequest("supplied a negative number for onezy");
        }
      }
    })(
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

    /* TODO: Add validation to check if birdsSold is greater than birds present */

    (async () =>
      await Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
        if (err) throw new Error(err);

        if (!farm) throw new BadRequest("Farm not found!");

        let dayExists;
        await Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
          if (err) throw new Error(err);
          const dayObject = farm.days.filter((day, index) => {
           // if (day.date.getDay() === new Date(date).getDay()) {
             
            if (day.date === new Date(date)) {
              return { day, index };
            }
          })[0];
          if (dayObject) dayExists = true;
        });

        if (dayExists) {
          const dayObject = farm.days
            .filter((day, index) => {
              // if (day.date.getDay() === date.getDay()) {
              if (day.date === date) {
                return { day, index };
              }
              return null;
            })
            .filter(Boolean)[0];

          const newDayData = { ...dayObject.day, ...req.body };

          farm.days[dayObject.index] = newDayData;
          await farm.save((err, data) => {
            if (err) throw new Error(err);
            res.status(201).json({
              dailyRecord: data.days[data.days.length],
              message: "Successfully updated daily accounting info",
            });
          });
        } else {
          farm.days.push(req.body);
          await farm.save((err, data) => {
            if (err) throw new Error(err);
            res.status(201).json({
              dailyRecord: data.days[data.days.length-1],
              message: "Successfully updated daily accounting info",
            });
          });
        }
      }))().catch((err) => next(err));
  } catch (error) {
    next(error);
  }
};

/**
 * Post Symptoms of sick birds
 */

const postSymptoms = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm or owner id not provided");
    }
    const symptoms = req.body;

    if (isLessThanZero(symptoms.totalNumberOfBirdsShowingSymptoms)) {
      throw new BadRequest("birds cannot be zero");
    }

    if (Object.keys(symptoms).length === 0) {
      throw new BadRequest("No symptom was provided");
    }

    Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
      if (err) throw new Error(err);
      farm.medics = { ...farm.medics, ...symptoms };
      farm.save((err) => {
        if (err) throw new Error(err);
        res.status(200).json({
          medics: farm.medics,
          messsage: "successfully updated the bird medics",
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

const updateBirdInfo = (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm or owner id not provided");
    }

    const {
      number,
      layers,
      nonLayers,
      sick,
      healthy,
      deathRate,
      productionRate,
    } = req.body;
    const lessThanZero = isLessThanZero(
      number,
      layers,
      nonLayers,
      sick,
      healthy
    );
    if (lessThanZero) {
      throw new BadRequest("One of the inputs is less than zero");
    }
    Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
      if (err) throw new Error(err);
      farm.birdInfo = { ...farm.birdInfo, ...req.body };
      farm.save((err, data) => {
        if (err) throw new Error(err);
        res
          .status(200)
          .json({ data, message: "successfully updated bird info" });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFarm,
  updateDailyRecord,
  postSymptoms,
  updateBirdInfo,
};
