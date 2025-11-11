import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Route for normal user registration
userRouter.post("/register", registerUser);

// Route for normal user login
userRouter.post("/login", loginUser);

// Route for admin user login
userRouter.post("/admin/login", adminLogin);

export default userRouter;
