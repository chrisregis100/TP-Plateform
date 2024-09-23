/* eslint-disable no-undef */
 
const express = require('express');
const connectDB = require("./config/db")
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const cors = require("cors")

const port = 5000

dotenv.config()

connectDB();

const app = express();
app.use(cookieParser())


app.use(express())
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus:200,
  })
);

app.use(express.urlencoded({ extended: false }));



// Configurer les sessions
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));


// initialisation de passport js

passport.use(passport.initialize())


// routes/session.js ou directement dans server.js

app.get('/api/session-status', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('authenticated');
  
    return res.status(200).json({
      isAuthenticated: true,
      user: req.user, // Passport.js attache automatiquement l'utilisateur ici
    });
  } else {
    return res.status(200).json({ isAuthenticated: false });
  }
});


app.use("/api", require("./routes/userRoute"))




app.listen(port, ()=>console.log(`le server  a demarré au port ${port}`)
)


