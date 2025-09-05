const express = require("express");
const { getCourses, enrollCourse,getEnrolledCourses } = require("../controller/course");
const auth = require("../middleware/auth");

const router = express.Router();

// Get all courses
router.get("/", auth, getCourses);

// Enroll in a course
router.post("/enroll/:id", auth, enrollCourse);
router.get("/my", auth,getEnrolledCourses );

module.exports = router;
