const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { respondNotFound } = require('./helpers');

// IMPORT ROUTES

//

const app =  express();
app.set('x-powered-by', false);

// MIDDLEWARES

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));

// ROUTES

//

// ERROR HANDLERS

app.use('*', (req, res) => {
    respondNotFound(res);
});

app.use((error, req, res, next) => {
    res.status(500);
    res.send(`An unexpected error occured`);
});

exports.app = app;