const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Method Override

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// Database

const mongoose = require('mongoose');
mongoose.connect(
        'mongodb://localhost:27017/company', {
            useNewUrlParser: true
        })
    .then(db => {
        console.log('Connected to MongoDB');
    });


// Load Routes

const overview = require('./routes/overview');
const office = require('./routes/office');
const company = require('./routes/company');


// Use Routes

app.use('/', overview);
app.use('/office', office);
app.use('/company', company);

// Use Style and JS

app.use(express.static(path.join(__dirname, 'public')));
app.use('/company', express.static('public'));


// Set Template Engine

const exphbs = require('express-handlebars');
const {isEmpty} = require('./helpers/handlebars-helpers');


app.engine('handlebars', exphbs({
    defaultLayout: 'home',
    helpers: {isEmpty: isEmpty}
}));
app.set('view engine', 'handlebars');

// Server Nodejs

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening at port: ${port}`);
});