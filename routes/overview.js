const express = require('express');
const router = express.Router();
const Company = require('../models/Company');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.get('/', (req, res)=>{

    Company.find({}).then(companies=>{
        
        res.render('home/index', {companies: companies});

    }).catch(err=>{
        if(err) throw err;
    });

});

module.exports = router;