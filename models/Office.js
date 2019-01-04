// Initializing Mongoose

const mongoose = require('mongoose');

// Initializing Mongoose Schema

const Schema = mongoose.Schema;

// Creating The Schema

const OfficeSchema = new Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

    // Inserting Company Schema to office so that it can be related in database
    companies: {
        type: Schema.Types.ObjectId,
        ref: 'companies'
    }

});

// Exporting the model

module.exports = mongoose.model('offices', OfficeSchema);