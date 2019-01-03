const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Office = require('../models/Office');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.post('/create', (req, res)=>{

    const newCompany = new Company({

        name: req.body.companyName,
        address: req.body.address,
        revenue: req.body.revenue,
        phone: req.body.phone

    });

    newCompany.save().then(savedCompany=>{
        res.redirect('/');
    }).catch(err=>{
        if (err) throw err;
    });

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

router.delete('/:id', (req, res)=>{

    Company.findOneAndDelete({_id: req.params.id})
    .then(company=>{
        res.redirect('/');
    }).catch(err=>{
        if (err) throw err;
    });

});




module.exports = router;