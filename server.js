const express = require('express'); 
const path = require('path');

// route folder
const api = require('./routes/index.js');

// to initialise express on server 3001
const app = express(); 
const PORT = process.env.PORT || 3001;

// access JSON and urlencoded form input
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)

// access to public folder files
app.use(express.static('public')); 

// GET route for index.html
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET route for notes.html
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, './public/notes.html'))
);

// listening for localhost port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);