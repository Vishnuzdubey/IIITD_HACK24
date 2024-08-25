const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    techStack: {
      type: [String], // Array of strings to hold technologies used
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    githubRepo: {
      type: String,
      trim: true,
      match: [/^https:\/\/github\.com\/.+/, "is invalid"], // Basic GitHub URL validation
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project
