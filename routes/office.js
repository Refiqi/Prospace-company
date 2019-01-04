// Initializing Express

const express = require('express');

// Initializing Router so that it can be called in app.js

const router = express.Router();

// Calling The models for Accessing Database

const Office = require('../models/Office');
const Company = require('../models/Company');

// Making sure All the request will render the layouts home

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

// Inserting data to the Database

router.get('/create', (req, res) => {

// Validating the Form input

    let errors = [];

    if (req.body.latitude < 1) {

        errors.push({
            message: "Please enter a positive number in Latitude"
        });
    }
    if (req.body.longitude < 1) {

        errors.push({
            message: "Please enter a positive number in Longitude"
        });
    }

    if (errors.length > 0) {

        Company.find({}).then(companies => {

            res.render('home/index', {
                errors: errors,
                officeName: req.body.officeName,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                date: req.body.date,
                companies: companies
            });

        });
    } else {

        const newOffice = new Office({

            name: req.body.officeName,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            date: req.body.date,
            companies: req.body.companies

        });

        // Saving the data to Database.
        
        newOffice.save().then(savedOffice => {

            Office.findOne(savedOffice)

                .populate('companies')
                .then(office => {

                    req.flash('success_message', `Office ${office.name} in ${office.companies.name} has been Created`);
                    res.redirect('/');

                }).catch(err => {
                    if (err) throw err;
                });

        }).catch(err => {
            if (err) throw err;
        });
    }

});

// DELETE data by it's id

router.delete('/:id', (req, res) => {
    
    Office.findOneAndDelete({
            _id: req.params.id
        })

        .populate('companies')
        .then(office => {

            req.flash('success_message', `Office ${office.name} in ${office.companies.name} has been Deleted`);
            res.redirect('/');
        }).catch(err => {
            if (err) throw err;
        });
});






module.exports = router;