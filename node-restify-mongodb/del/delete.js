
var Kitten = require('../schema');

var deleteF = function (req, res, next) {

    Kitten.remove({ name: req.params.name }, function (err) {

    });

    return next();
}

module.exports = deleteF;