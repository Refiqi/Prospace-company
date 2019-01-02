module.exports = {

    isEmpty: function(obj, conditional, options){
        if (obj === conditional) {
            return options.fn(this);
        }
        return options.inverse(this);
    }
};