const { Router } = require("express");
const farmController = require("../controllers/farm/farm");
const router = Router();

/**
 * Get all farms
 */
router.get("/:ownerId", farmController.getAllFarms);

/**
 * Get single farm
 */
router.get("/:ownerId/:id", farmController.getFarm);

/**
 * create farm
 */
router.post("/:ownerId/", farmController.createFarm);

/**
 * Update farm
 */
router.patch("/:ownerId/:id", farmController.updateFarm);

/**
 * Delete all farms
 */
router.delete("/:ownerId/", farmController.removeAllFarm);

/**
 * Delete farm
 */
router.delete("/:ownerId/:id", farmController.removeFarm);

module.exports = router