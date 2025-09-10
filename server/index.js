require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Mongo connected'))
.catch(err => console.error(err));


// Models
const { User, Resource } = require('./models');


// Auth middleware
const { authMiddleware } = require('./middleware');


// Routes
const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');


app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));