const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
//const questionRoutes = require('./routes/questionRoutes');

// Connecting database
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database not connected', err));

// middleware
app.use(express.json());

// Use cors middleware to allow specific origins
var corsOptions = {
  origin: 'http://localhost:5173', // replace with the origin you want to allow
  credentials: true, // this allows the session cookie to be sent with the request
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// routes 
app.use('/', require('./routes/authRoutes'));
//app.use('/questions', questionRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));