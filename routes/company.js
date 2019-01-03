const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Office = require('../models/Office');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.get('/:id', (req, res) => {

    Company.findOne({_id: req.params.id}).then(companies=>{
        
        Office.find({companies: req.params.id}).then(offices=>{
        
            res.render('home/company', {companies: companies, offices: offices});

        }).catch(err=>{
            if (err) throw err;
        });
    });
});




module.exports = router;