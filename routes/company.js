const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.all('/:id', (req, res) => {

    Company.findOne({_id: req.params.id}).then(companies=>{
        
        res.render('home/company', {companies: companies});

    });
});









module.exports = router;