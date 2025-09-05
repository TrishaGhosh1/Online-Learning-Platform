const Course = require("../models/course");
const User = require("../models/user");


const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


const enrollCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const userId = req.user.id; // set by auth middleware

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.enrolledCourses.includes(courseId)) {
      return res.json({ message: "Already enrolled" });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.json({ message: "Enrolled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate("enrolledCourses");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.enrolledCourses); 
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getCourses, enrollCourse ,getEnrolledCourses};
