const express = require('express');
const router = express.Router();
const Office = require('../models/Office');
const Company = require('../models/Company');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});


router.get('/create', (req, res) => {

    let errors = [];

    if (req.body.latitude < 1){
        errors.push({
            message: "Please enter a positive number in Latitude"
        });
    }
    if (req.body.longitude < 1){
        errors.push({
            message: "Please enter a positive number in Longitude"
        });
    }

    if (errors.length > 0) {

        Company.find({}).then(companies=>{

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

    newOffice.save().then(savedOffice=>{

        Office.findOne(savedOffice)

        .populate('companies')
        .then(office=>{

            req.flash('success_message', `Office ${office.name} in ${office.companies.name} has been Created`);
            res.redirect('/');

        }).catch(err=>{
            if (err) throw err;
        });

    }).catch(err=>{
        if (err) throw err;
    });
    }

});

router.delete('/:id', (req, res) => {
    Office.findOneAndDelete({_id: req.params.id})

        .populate('companies')
        .then(office => {

            req.flash('success_message', `Office ${office.name} in ${office.companies.name} has been Deleted`);
            res.redirect('/');
        }).catch(err=>{
            if (err) throw err;
        });
});






module.exports = router;