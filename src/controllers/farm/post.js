const Farm = require("../../models/farm");
const { BadRequest } = require("../../utils/error");

/**
 * Create farm
 */
const createFarm = async (req, res, next) => {
  try {
    const { ownerId } = req.params;
    const { name } = req.body;
    let farmExist;

    if (!ownerId) {
      throw new BadRequest("ownerId not supplied");
    }

    await Farm.findOne({ name }, (err, data) => {
      if (err) throw new Error(err);
      if (data) farmExist = true;
    });

    if (farmExist) {
      throw new BadRequest(
        "A farm with this name already exists, try another name"
      );
    }

    if (Object.entries(req.body).length === 0) {
      throw new BadRequest("No data was supplied");
    }

    for (let i in req.body) {
      if (!req.body[i]) {
        throw new BadRequest(`${i} wasn't supplied`);
      }
    }
    const farm = new Farm({ name, ownerId });

    await farm.save((error) => {
      if (error) {
        res.status(400).json({ message: error.errors });
      } else {
        res.status(201).json({
          farm,
          message: "Successfully created the farm",
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFarm,
};
