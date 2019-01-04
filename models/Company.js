// Initializing Mongoose

const mongoose = require('mongoose');

// Initializing Mongoose Schema

const Schema = mongoose.Schema;

// Creating The Schema

const CompanySchema = new Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    revenue:{
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true,
        trim: true
    }

});

// Exporting the model

module.exports = mongoose.model('companies', CompanySchema);