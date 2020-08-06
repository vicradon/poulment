const { Router } = require("express");
const medicsController = require("../controllers/medics/medics");
const router = Router();

/**
 * Get recommendations based on symptoms
 */
router.get(
  "/:ownerId/:id/recommended-medication",
  medicsController.getRecommendedMedication
);

/**
 * Post Symptoms of sick birds
 */
router.post("/:ownerId/:id/symptoms", medicsController.postSymptoms);

module.exports = router;
