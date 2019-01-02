const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Database

const mongoose = require('mongoose');
mongoose.connect(
        'mongodb://localhost:27017/company', {
            useNewUrlParser: true
        })
    .then(db => {
        console.log('Connected to MongoDB');
    });

// Body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Load Routes

const main = require('./routes/main');


// Use Routes

app.use('/', main);

// Use Style and JS

app.use(express.static(path.join(__dirname, 'public')));

// Method Override

const methodOverride = require('method-override');

app.use(methodOverride('_method'));

// Set Template Engine

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'home'
}));
app.set('view engine', 'handlebars');

// Server Nodejs

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening at port: ${port}`);
});