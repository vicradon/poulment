const { Router } = require("express");
const userController = require("../controllers/auth/auth");
const router = Router();

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.post("/password-update", userController.updatePassword);

module.exports = router;
