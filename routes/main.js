const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'home';
    next();
});
router.get('/', (req, res)=>{
    res.render('home/index');
});

module.exports = router;