var Kitten = require('../schema');

function create(req, res, next) {

    Kitten.create({ name: req.params.name }, function (err, kittens) {
        if (err) return console.error(err);
    });

    return next();

};

module.exports = create;