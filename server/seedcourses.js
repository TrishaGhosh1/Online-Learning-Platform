const mongoose = require("mongoose");
const Course = require("./models/course"); 
require('dotenv').config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err.message));


const courses = [
  {
    thumbnail: "thumb1.jpg",
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development from scratch.",
    price: 99.99
  },
  {
    thumbnail: "thumb2.jpg",
    title: "Python for Beginners",
    description: "Start coding with Python easily and quickly.",
    price: 49.99
  },
  {
    thumbnail: "thumb3.jpg",
    title: "Data Science with R",
    description: "Analyze and visualize data using R programming.",
    price: 79.99
  },
  {
    thumbnail: "thumb4.jpg",
    title: "Machine Learning Mastery",
    description: "Hands-on ML course with real-world projects.",
    price: 129.99
  },
  {
    thumbnail: "thumb5.jpg",
    title: "UI/UX Design Essentials",
    description: "Learn modern design principles and Figma.",
    price: 59.99
  },
  {
    thumbnail: "thumb6.jpg",
    title: "Digital Marketing 101",
    description: "Master SEO, social media, and online ads.",
    price: 39.99
  },
  {
    thumbnail: "thumb7.jpg",
    title: "Java Programming",
    description: "Build robust apps with Java and OOP concepts.",
    price: 69.99
  },
  {
    thumbnail: "thumb8.jpg",
    title: "C++ Fundamentals",
    description: "Introduction to C++ programming with projects.",
    price: 54.99
  },
  {
    thumbnail: "thumb9.jpg",
    title: "Cloud Computing Basics",
    description: "Understand AWS, Azure, and cloud deployment.",
    price: 89.99
  },
  {
    thumbnail: "thumb10.jpg",
    title: "Cybersecurity Essentials",
    description: "Protect systems and networks from attacks.",
    price: 109.99
  },
  {
    thumbnail: "thumb11.jpg",
    title: "Mobile App Development",
    description: "Create Android and iOS apps with Flutter.",
    price: 119.99
  },
  {
    thumbnail: "thumb12.jpg",
    title: "Artificial Intelligence",
    description: "Learn AI concepts, neural networks, and NLP.",
    price: 139.99
  },
  {
    thumbnail: "thumb13.jpg",
    title: "Blockchain Development",
    description: "Build decentralized apps and smart contracts.",
    price: 149.99
  },
  {
    thumbnail: "thumb14.jpg",
    title: "Game Development with Unity",
    description: "Learn to design and code 2D/3D games.",
    price: 79.99
  },
  {
    thumbnail: "thumb15.jpg",
    title: "Photography Masterclass",
    description: "Improve your photography skills with tips.",
    price: 44.99
  },
  {
    thumbnail: "thumb16.jpg",
    title: "Financial Analysis",
    description: "Master Excel and financial modeling skills.",
    price: 74.99
  }
];

// Insert courses
const seedCourses = async () => {
  try {
    await Course.deleteMany(); 
    await Course.insertMany(courses);
    console.log("✅ Courses inserted successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error inserting courses:", err.message);
    mongoose.disconnect();
  }
};

seedCourses();
