const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");

/**
 * Post symptoms of birds
 */
const postSymptoms = async (req, res, next) => {
  try {
    const { ownerId, id } = req.params;
    const { weaknessInBirds, wateryPoo } = req.body;

    if (!ownerId || !id) {
      throw new BadRequest("Owner id or farm id wasn't provided");
    }

    for (let i in req.body) {
      if (req.body[i] === undefined) {
        throw new BadRequest(`No data was supplied for ${i}`);
      }
    }
    if (!wateryPoo) {
      throw new BadRequest("Watery poo not supplied");
    }
    if (!weaknessInBirds) {
      throw new BadRequest("Weakness in birds not supplied");
    }

    await Farm.findOne({ _id: id, ownerId }, (error, farm) => {
      if (error) res.status(400).json({ message: error });


      farm.medics.currentSymptoms.weaknessInBirds = weaknessInBirds;
      farm.medics.currentSymptoms.wateryPoo = wateryPoo;

      farm.save((err) => {
        if (err) throw new Error(err);
        res.status(201).json({
          currentSymptoms: farm.medics.currentSymptoms,
          message: "Successfully updated current symptoms",
        });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postSymptoms,
};
