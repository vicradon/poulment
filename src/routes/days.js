const { Router } = require("express");
const daysController = require("../controllers/days/days");
const router = Router();

/**
 * Get days
 */
router.get("/:ownerId/:id", daysController.getDays);

/**
 * Get day in range
 */
router.get("/:ownerId/:id/q?", daysController.getDaysInRange);

/**
 * Get day
 */
router.get("/:ownerId/:id/:date", daysController.getDay);


module.exports = router;
