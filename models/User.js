const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://images.pexels.com/photos/3876633/pexels-photo-3876633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
