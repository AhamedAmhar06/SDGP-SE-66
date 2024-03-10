const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const{mongoose} = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const questionRoutes = require('./routes/questionRoutes');
//Connecting database
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch(() => console.log('Database not connected' , err));

//middleware
app.use(express.json());
app.use(cors()); // Use cors middleware to allow all origins
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));


//routes 
app.use('/', require('./routes/authRoutes'));
app.use('/questions', questionRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
