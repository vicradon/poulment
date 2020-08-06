const { Router } = require("express");
const dailyRecordController = require("../controllers/daily-record/daily-record");
const router = Router();

/**
 * The most recent daily record
 */
// router.get("/:ownerId/:id", dailyRecordController.getDailyRecord);

/**
 * Post a record for that day
 * 
 * If posted, recalculate the income and expense and 
 * update the expenses section of the Farm model
 */
router.post("/:ownerId/:id", dailyRecordController.postDailyRecord);

/**
 * Update the most recent daily record
 * If that day has passed, 
 * prevent the client from updating the record in question5
 * 
 * If updated, recalculate the income and expense and 
 * update the expenses section of the Farm model
 */
router.patch("/:ownerId/:id", dailyRecordController.updateDailyRecord);

/**
 * Update the most recent daily record
 * If that day has passed, 
 * prevent the client from updating the record in question
 * 
 * If updated, recalculate the income and expense and 
 * update the expenses section of the Farm model
 */
router.delete("/:ownerId/:id", dailyRecordController.removeDailyRecord);


module.exports = router;
