// Initializing Express

const express = require('express');

// Initializing Router so that it can be called in app.js

const router = express.Router();

// Calling The models for Accessing Database

const Company = require('../models/Company');

// Making sure All the request will render the layouts home

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

// Rendering the Overview page and loading Company data to be displayed

router.get('/', (req, res) => {

    Company.find({}).then(companies => {

        res.render('home/index', {
            companies: companies
        });

    }).catch(err => {
        if (err) throw err;
    });

});

module.exports = router;