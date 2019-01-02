const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 5000;

// Load Routes

const main = require('./routes/main');


// Use Routes

app.use('/', main);

// Use Style and JS

app.use(express.static(path.join(__dirname, 'public')));


// Set Template Engine

app.engine('handlebars', exphbs({
    defaultLayout: 'home'
}));
app.set('view engine', 'handlebars');

// Server Nodejs

app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`Listening at port: ${port}`);
});

