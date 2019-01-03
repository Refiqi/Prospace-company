const express = require('express');
const router = express.Router();
const Office = require('../models/Office');


router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});


router.get('/', (req, res)=>{

    const newOffice = new Office({

        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        date: req.body.date,
        companies: req.body.companies

    });

    console.log(newOffice);
    res.send('itwotk');
    

});




module.exports = router;