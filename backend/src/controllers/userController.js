import { validateSignUpData } from "../utils/validation.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// generating the JWT token for the user
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Normal user login request
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check 1: validate if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // check 2: verify if the email is valid
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide a valid email ID." });
    }

    // finding the userinfo based on email ID
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }

    // checking the password for the user
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password." });
    }

    // generate JWT token for the user
    const token = generateToken(user._id);

    // add token to the cookie and send it back to the user in response
    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day = 24 hours
    });

    // send success response
    res.status(200).json({
      success: true,
      message: "User logged in successfully.",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// New user registration request
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check 1: validate the incoming data
    validateSignUpData(req);

    // check 2: checking if the user already exists with the same email ID
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email ID.",
      });
    }

    // encrypt the user password before saving to the database
    const passwordHash = await bcrypt.hash(password, 10);

    // saving user in DB after all checks are passed
    const user = new User({
      name: name,
      email: email,
      password: passwordHash,
    });

    await user.save();

    // generate JWT token for the user
    const token = generateToken(user._id);

    // add token to the cookie and send it back to the user in response
    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day = 24 hours
    });

    // send success response
    res.status(200).json({
      success: true,
      message: "User registered successfully.",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Admin user login request
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check 1: validate if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    // check 2: verify if the admin credentials are correct
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid admin credentials." });
    }

    // generate JWT token for the admin
    const token = jwt.sign(
      { email: email, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // add token to the cookie and send it back to the admin in response
    res.cookie("token", token, {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day = 24 hours
    });

    // send success response
    res.status(200).json({
      success: true,
      message: "Admin logged in successfully.",
      data: {
        admin: {
          email: email,
        },
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
