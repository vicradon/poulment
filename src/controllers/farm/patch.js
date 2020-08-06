const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");
/**
 * Update farm
 */
const updateFarm = async (req, res) => {
  try {
    const { id, ownerId } = req.params;

    if (!id || !ownerId) {
      throw new BadRequest("id or ownerId not supplied");
    }
    const { name } = req.body;

    for (let i in req.body) {
      if (!req.body[i]) {
        throw new BadRequest(`No data was supplied for ${i}`);
      }
    }

    await Farm.findOne({ _id: id, ownerId }, (err, farm) => {
      if (err) throw new Error(err);
      farm.name = name;
      farm.save((err, farm) => {
        if (err) throw new Error(err);
        res.status(200).json({ farm, message: "successfully updated farm" });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateFarm,
};
