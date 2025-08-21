require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// Template engine setup
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/main'));

// Start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
