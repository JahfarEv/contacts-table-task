const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const signToken = (id) => {
  return JWT.sign({ id, isAdmin: false }, process.env.SECRET_STR, {
    expiresIn: process.env.LOGIN_EXPIRES,
  });
};

async function signup(req, res, next) {
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !password ||
    name === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(400).json({
      status: "error",
      message: "Required fields",
    });
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400).json({
      status: "error",
      message: "Email alredy registred",
    });
  }
  const newUser = new User({ name, email, password });

  try {
    await newUser.save();
    res.json("Signup successfull");
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    res.status(400).json({
      status: "error",
      message: "Required fields",
    });
  }
  try {
    const validUser = await User.findOne({ email }).select("+password");

    if (!validUser) {
      res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    const token = signToken(validUser._id);

    res.status(200).json({
      status: "success",
      token,
      validUser,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signup,
  login,
};
