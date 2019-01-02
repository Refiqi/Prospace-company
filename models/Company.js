const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


module.exports = mongoose.model('companies', CompanySchema);