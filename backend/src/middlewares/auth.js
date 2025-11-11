import jwt from "jsonwebtoken";
import User from "../models/user.js";

// middleware to protect routes that require authentication
const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    // check 1: verify if the token is present in the cookies
    if (!token) {
      return res.status(401).json({ success: false, message: "Please Login!" });
    }

    // check 2: verify the token is valid or not
    const decodedObj = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decodedObj;

    // find the user by ID and send back the user info
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found, please login!" });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default userAuth;
