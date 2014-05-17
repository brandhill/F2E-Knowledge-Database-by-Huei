// db server
var mongoose = require('mongoose');
mongoose.connect('mongodb://<usr>:<pass>@ds043329.mongolab.com:43329/testingmongodb');

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('you are open mongodb')// yay!
});


// restful api server
var restify = require('restify');

var server = restify.createServer({});
server.use(restify.fullResponse());
server.use(restify.bodyParser());

server.listen(8080, function () {
    console.log('server start');
});

// GET
// curl http://localhost:8080/kitty
server.get('/kitty', require('./get/kitty-name'));

// POST
// curl -i -X POST -d 'name=good' http://localhost:8080/add
server.post('/add', require('./post/add'));



