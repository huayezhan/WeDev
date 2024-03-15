// Import
const config = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Set up mongoose
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.mongoUri).then(() => {
    console.log("Connected to WeDev Survey database!");
});
    
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`) 
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome WeDev web site!" });
});

app.listen(config.port, (err) => { 
    if (err) {
        console.log(err) 
    }
    console.info('Server is running on port %s.', config.port) 
});