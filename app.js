const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const port = process.env.PORT || 5000;

// Body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Method Override

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// Session and Flash
app.use(session({
    secret: 'refiqi',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

// Creating Local Variables with middleware
app.use((req, res, next) => {

    res.locals.success_message = req.flash('success_message');
    res.locals.errors_message = req.flash('errors_message');

    next();
});

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
app.use('/office', express.static('public'));


// Set Template Engine

const exphbs = require('express-handlebars');
const {
    isEmpty
} = require('./helpers/handlebars-helpers');


app.engine('handlebars', exphbs({
    defaultLayout: 'home',
    helpers: {
        isEmpty: isEmpty
    }
}));
app.set('view engine', 'handlebars');



// Server Nodejs

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening at port: ${port}`);
});