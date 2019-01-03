const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    companies: {
        type: Schema.Types.ObjectId,
        ref: 'companies'
    }

});


module.exports = mongoose.model('offices', OfficeSchema);