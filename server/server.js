const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Invoke the application in express
const app = express();

// Import routes
const postRoutes = require("./routes/post");

// Middleware
app.use(bodyParser.json());

// Use the postRoutes with a base URL prefix
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://yashmitha:2004ydilshan@mern.9hdmix8.mongodb.net/merncrud?retryWrites=true&w=majority&appName=mern';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Mongo DB connected");
  })
  .catch((err) => console.log("Db error", err));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
