const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Office = require('../models/Office');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});

router.post('/create', (req, res) => {

    let errors = [];

    if (req.body.revenue < 1) {

        errors.push({
            message: "Please enter a positive number in Revenue"
        });
    }
    if (req.body.phone < 1) {

        errors.push({
            message: "Please enter a valid and positive number in Phone"
        });
    }

    if (errors.length > 0) {

        Company.find({}).then(companies => {

            res.render('home/index', {
                errors: errors,
                companyName: req.body.companyName,
                address: req.body.address,
                revenue: req.body.revenue,
                phone: req.body.phone,
                companies: companies
            });

        });
    } else {

        const newCompany = new Company({

            name: req.body.companyName,
            address: req.body.address,
            revenue: req.body.revenue,
            phone: req.body.phone

        });

        newCompany.save().then(savedCompany => {
            
            req.flash('success_message', `Company ${savedCompany.name} has been Created`);
            res.redirect('/');

        }).catch(err => {
            if (err) throw err;
        });
    }
});

router.get('/:id', (req, res) => {

    Company.findOne({
            _id: req.params.id
        })

        .then(companies => {

            Office.find({
                    companies: req.params.id
                })

                .then(offices => {

                    res.render('home/company', {
                        companies: companies,
                        offices: offices
                    });

                }).catch(err => {
                    if (err) throw err;
                });
        });
});

router.delete('/:id', (req, res) => {

    Company.findOneAndDelete({
            _id: req.params.id
        })

        .then(company => {

            req.flash('success_message', `Company ${company.name} has been Deleted`);
            res.redirect('/');

        }).catch(err => {
            if (err) throw err;
        });

});




module.exports = router;