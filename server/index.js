// const express = require('express');
// const dotenv = require('dotenv').config();
// const cors = require('cors');
// const { mongoose } = require('mongoose');
// const app = express();
// const cookieParser = require('cookie-parser');
// const { Server } = require('socket.io');

// // Connecting database
// mongoose.connect(process.env.MONGO_URL)
//   .then(() => console.log('Database connected'))
//   .catch(err => console.log('Database not connected', err));

// // middleware
// app.use(express.json());

// // Use cors middleware to allow specific origins
// var corsOptions = {
//   origin: 'http://localhost:5173', // replace with the origin you want to allow
//   credentials: true, // this allows the session cookie to be sent with the request
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));

// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

// // routes 
// app.use('/', require('./routes/authRoutes'));
// //app.use('/questions', questionRoutes);

// const port = 8000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const questionRoutes = require('./routes/questionRoutes');
const { Server } = require('socket.io');

// Connecting database
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database not connected', err));

// Create server instance
const server = app.listen(8000, () => console.log(`Server is running on port 8000`));

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: 'https://www.undergraduplift.tech',
    credentials: true
  }
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
} );

// Routes
app.use('/', require('./routes/authRoutes'));
//app.use('/questions', questionRoutes);

module.exports = app;
