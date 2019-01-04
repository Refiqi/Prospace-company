// Initializing Moment package

const moment = require('moment');

module.exports = {

    // Checking the Object if it is Empty or not

    isEmpty: function(obj, conditional, options){
        if (obj === conditional) {
            return options.fn(this);
        }
        return options.inverse(this);
    },


    // Creating A Function in handlebars for Beautify the Date display 

    generateDate: function(date, format) {
        return moment(date).format(format);
    }
    
};