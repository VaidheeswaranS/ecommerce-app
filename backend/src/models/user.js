import mongoose, { mongo } from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return validator.isEmail(v);
        },
        message: "Invalid email format.",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return validator.isStrongPassword(v, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
        },
        message:
          "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one symbol.",
      },
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  },
  {
    minimize: false, // this ensures empty objects are saved. Initially cartData is an empty object when new user is created
  }
);

const User = mongoose.model("User", userSchema);

export default User;
