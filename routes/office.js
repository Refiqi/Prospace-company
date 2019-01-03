const express = require('express');
const router = express.Router();
const Office = require('../models/Office');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});


router.get('/create', (req, res) => {

    const newOffice = new Office({

        name: req.body.officeName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        date: req.body.date,
        companies: req.body.companies

    });

    newOffice.save();

    Office.findOne(newOffice)
    
    .populate('companies')
    .then(office => {

        req.flash('success_message', `Office ${office.name} in ${office.companies.name} has been Created`);
        res.redirect('/');

    }).catch(err => {
        if (err) throw err;
    });
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