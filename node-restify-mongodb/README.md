
Creating mongodb Restful API through

[node-restify](https://github.com/mcavage/node-restify) - Restful <br/>
[mongodb](http://www.mongodb.org/) - DB <br/>
[??](??) - node CRUD db *too many, finding a better one* <br/>
[??](??) - api document

Installation.

```bash
$ npm install restify
```
node-restify

```javascript
var restify = require('restify');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
```



