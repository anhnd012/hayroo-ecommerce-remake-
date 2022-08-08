const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');



const api = require('./routes/api');

const config = {
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};




// Need to require the entire Passport config module so app.js knows about it
require('./config/passport')

// app.use(express.static("public"));
app.use(morgan('combined'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors());

// Set cookie & session for store 
app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [ config.COOKIE_KEY_1, config.COOKIE_KEY_2 ],
}));

// Initialize passport 
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.user);
  console.log(req.session);
  next();
})

app.use('/v1', api);



module.exports = app;

