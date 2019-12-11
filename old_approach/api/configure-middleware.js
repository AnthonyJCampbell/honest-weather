const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session')

const sessionConfig = {
  name: "weather_cookie",
	secret: "840734026724120121720710615264238", // Run Math.random() twice
	cookie: {
    maxAge: 1000 * 3600, // 1 sec * 3600 = 1 hour
		secure: false, // In production, this will have to be true!
		httpOnly: true, // Ensure no JS code can access the cookie
	},
	resave: false, // Option to recreate the session even if it hasn't changed, i.e. refresh the cookie
  saveUninitialized: false, // Affects compliance for GDPR laws. Should only be true if user has accepted cookies
}

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(session((sessionConfig)));
  server.use(cors());
};
