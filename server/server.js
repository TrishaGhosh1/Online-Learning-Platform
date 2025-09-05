const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const courseRoutes = require("./routes/course");
const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log('MongoDB connected'); })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  })

app.use(express.json());


// Serve images from /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, '../public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/api/auth', authRoutes);


app.use("/api/courses", courseRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
