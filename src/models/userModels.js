import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide  a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide  a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide  a password"],
  },
  isVerrified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  varifyToken: String,
  varifyTokenExpiry: Date,
});

//if already created then use it or else create it newly

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
