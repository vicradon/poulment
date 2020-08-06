const { Router } = require("express");
const accountingController = require("../controllers/accounting/accounting");
const router = Router();

/**
 * Get expense
 */
router.get("/:ownerId/:id/expense", accountingController.getExpense);

/**
 * Get expense in range
 */
router.get("/:ownerId/:id/expense/q=", accountingController.getExpenseInRange);

/**
 * Get expense by date
 */
router.get("/:ownerId/:id/expense/date", accountingController.getExpenseByDate);

/**
 * Get income
 */
router.get("/:ownerId/:id/income", accountingController.getIncome);

/**
 * Get income in range
 */
router.get("/:ownerId/:id/income/q=", accountingController.getIncomeInRange);

/**
 * Get income by date
 */
router.get("/:ownerId/:id/income/date", accountingController.getIncomeByDate);

/**
 * Get balance
 */
router.get("/:ownerId/:id/balance", accountingController.getBalance);

/**
 * Get balance in range
 */
router.get("/:ownerId/:id/balance/q=", accountingController.getBalanceInRange);

/**
 * Get balance by date
 */
router.get("/:ownerId/:id/balance/date", accountingController.getBalanceByDate);


module.exports = router;
