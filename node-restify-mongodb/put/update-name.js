var Kitten = require('../schema');

function update(req, res, next) {


    Kitten.update({ name: req.params.name }, { name: 'newName' }, { multi: true }, function (err, numberAffected, raw) {
        if (err) return console.error(err);

        console.log(req.params.name + ' change')
    });

    return next();

};

module.exports = update;