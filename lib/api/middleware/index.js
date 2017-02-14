module.exports = function(req, res, next) {
    require('./response')(req, res, next);
};
