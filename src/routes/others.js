const { Router } = require("express");
const farmController = require("../controllers/others/farm");
const router = Router();

/**
 * Get daily record
 */
router.get("/:ownerId/:id/dailyRecord/:date", farmController.getDailyRecord);

/**
 * Add daily record
 */
router.post("/:ownerId/:id/dailyRecord", farmController.updateDailyRecord);

/**
 * Edit  daily record
 */
router.patch("/:ownerId/:id/dailyRecord", farmController.updateDailyRecord);

/**
 * Reset daily record
 */
router.delete("/:ownerId/:id/dailyRecord/:date", farmController.resetDailyRecord);

/**
 * post bird Info
 */
router.post("/:ownerId/:id/birds", farmController.updateBirdInfo);

/**
 * update bird Info
 */
router.patch("/:ownerId/:id/birds", farmController.updateBirdInfo);

/**
 * Post Symptoms of sick birds
 */
router.post("/:ownerId/:id/birds/symptoms", farmController.postSymptoms);

/**
 * Get recommendations based on symptoms
 */
router.get(
  "/:ownerId/:id/birds/recommendedMedication",
  farmController.getRecommendedMedication
);

module.exports = router;
