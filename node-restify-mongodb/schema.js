var mongoose = require('mongoose');

var kittySchema, Kitten;

// kitty schema
kittySchema = mongoose.Schema({
    name: String,
    newKitten: Boolean
})

// compiling our schema into a Model
Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten;