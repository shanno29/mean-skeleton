module.exports = function(req, res, next) {
    res.pass = function(status, data) {
        status = status || 200;
        return res.status(status).json(data);
    };

    res.fail = function(status, data) {
        status = status || 402;
        return res.status(status).json(data);
    };

    next();
};