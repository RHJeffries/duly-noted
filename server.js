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

// access to public folder files
app.use(express.static('public')); 