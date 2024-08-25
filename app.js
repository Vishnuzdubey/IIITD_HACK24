const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const adminRoutes = require('./routes/admin');
const projectRoutes = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/hackathon');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');

// Routes
app.use('/admin', adminRoutes);
app.use('/projects', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
