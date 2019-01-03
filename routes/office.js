const express = require('express');
const router = express.Router();
const Office = require('../models/Office');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});


router.get('/create', (req, res)=>{

    const newOffice = new Office({

        name: req.body.officeName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        date: req.body.date,
        companies: req.body.companies

    });
    
    newOffice.save().then(savedOffice=>{
        res.redirect('/');
    }).catch(err=>{
        if (err) throw err;
    });
});

router.delete('/:id', (req, res)=>{
    Office.findOneAndDelete({_id: req.params.id}).then(companies=>{
        res.redirect('/');
    });
});






module.exports = router;