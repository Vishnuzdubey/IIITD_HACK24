const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "is invalid"], // Simple email validation
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Minimum length for password
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const user = mongoose.model("User", userSchema);

module.exports = user;
