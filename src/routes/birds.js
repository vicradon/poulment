const { Router } = require("express");
const birdController = require("../controllers/bird/bird");
const router = Router();

/**
 * Get bird info
 */
router.get("/:ownerId/:id", birdController.getBirdInfo);

/**
 * update bird info
 */
router.patch("/:ownerId/:id", birdController.updateBirdInfo);

module.exports = router;
