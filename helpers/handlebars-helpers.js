const moment = require('moment');

module.exports = {

    isEmpty: function(obj, conditional, options){
        if (obj === conditional) {
            return options.fn(this);
        }
        return options.inverse(this);
    },

    generateDate: function(date, format) {
        return moment(date).format(format);
    }
    
};