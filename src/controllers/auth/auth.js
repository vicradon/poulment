const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { BadRequest } = require("../../utils/error");
const hashPassword = require("../../utils/hash_password");
const isValidPassword = require("../../utils/password_strength_validator");

const signup = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;

    let userExists = false;
    await User.findOne({ email: email }, async (err, user) => {
      if (err) throw new Error(err);
      if (user) userExists = true;
    });

    if (userExists) {
      throw new BadRequest("User already exists");
    }

    const fields = {
      email,
      password,
      firstName,
      lastName,
      role,
    };
    for (i in fields) {
      if (!fields[i]) {
        throw new Error(`${i} not supplied`);
      }
    }

    if (!isValidPassword(password).status) {
      throw new BadRequest(isValidPassword(password).message);
    }

    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      role,
    });

    const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    user.token = token;
    await user.save();

    res.json({
      user,
      message: "Signed up successfully",
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password, keepLoggedIn } = req.body;
    const user = await User.findOne({
      email,
    });

    if (!user) {
      throw new Error("User not found");
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });

      await User.findOne({ _id: user._id }, (err, user) => {
        user.token = token;
        user.save((err, user) => {
          res.status(200).json({
            user,
            message: "logged in successfully",
          });
        });
      });
    } else {
      res.status(401).json({
        message: "Password incorrect",
      });
    }
  } catch (error) {
    next(error);
  }
};

const updatePassword = (req, res, next) => {
  try {
    const { email, newPassword } = req.body;

    if (!email) {
      throw new BadRequest("Email not provided");
    }

    if (!isValidPassword(newPassword).status) {
      throw new BadRequest(isValidPassword(newPassword).message);
    }

    User.findOne({ email }, async (err, user) => {
      if (err) throw new Error(err);

      user.password = hashPassword(newPassword);
      await user.save((err, user) => {
        if (err) throw new Error(err);
        res
          .status(200)
          .json({ user, message: "password updated successfully" });
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  updatePassword,
};
