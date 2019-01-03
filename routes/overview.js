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

router.post('/company', (req, res)=>{

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

router.post('/:id', (req, res)=>{

    Company.findOneAndDelete({_id: req.params.id})
    .then(company=>{
        res.redirect('/');
    }).catch(err=>{
        if (err) throw err;
    });

});


module.exports = router;