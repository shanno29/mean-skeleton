module.exports = {

    // functions used to pass a promise or throw an error properly for error handling and testing

    // pass success promise down the stack
    pass: function(res) { return function(data) { return res.status(200).json(data) }; },

    // pass error promise down the stack
    fail: function(res) { return function(error) { return res.status(500).json(error.message); }; }

};