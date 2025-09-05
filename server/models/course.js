
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  thumbnail: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Course", CourseSchema);
