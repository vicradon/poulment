const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");

/**
 * remove single farm
 */
const removeFarm = async (req, res) => {
  try {
    const { id, ownerId } = req.params;
    if (!id || !ownerId) {
      throw new BadRequest("id or ownerId not supplied");
    }
    await Farm.findOneAndDelete({ _id: id, ownerId }, (err, data) => {
      if (err) throw new Error(err);
      res.status(200).json({ message: "successfully deleted farm" });
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Remove all farms
 */
const removeAllFarm = async (req, res) => {
  try {
    const { id, ownerId } = req.params;
    if (!id || !ownerId) {
      throw new BadRequest("id or ownerId not supplied");
    }
    await Farm.deleteMany({ id, ownerId }, (err, data) => {
      if (err) throw new Error(err);
      res.status(200).json({ message: "successfully deleted farms" });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  removeFarm,
  removeAllFarm,
};
