const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");
const isLessThanZero = require("../../utils/is_less_than_zero");
const isNotNumber = require("../../utils/is_not_number");

/**
 * Get bird info
 */

const updateBirdInfo = async (req, res, next) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("Farm or owner id not provided");
    }

    for (let i in req.body) {
      if (req.body[i] === undefined) {
        throw new BadRequest(`No data was supplied for ${i}`);
      }
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
    const notNumber = isNotNumber(number, layers, nonLayers, sick, healthy);

    if (lessThanZero) {
      throw new BadRequest("One of the fields is less than zero");
    }

    if (notNumber) {
      throw new BadRequest("One of the fields is not a number");
    }

    Farm.findOne({ _id: id, ownerId }, async (err, farm) => {
      if (err) throw new Error(err);

      farm.birdInfo = {
        ...farm.birdInfo,
        ...req.body,
      };
      farm.save((err) => {
        if (err) throw new Error(err);
        res.status(200).json({
          birdInfo: farm.birdInfo,
          message: "bird information updated successfully",
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateBirdInfo,
};
