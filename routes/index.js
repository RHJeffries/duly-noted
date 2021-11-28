const express = require('express');

// import from notes route
const notesRoute = require('./notes');

const app = express();

app.use('/notes', notesRoute);

module.exports = app;