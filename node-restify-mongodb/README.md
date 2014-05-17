
**Creating mongodb Restful API through**

[node-restify](https://github.com/mcavage/node-restify) - Restful <br/>
[mongodb](http://www.mongodb.org/) - DB <br/>
[mongoose](http://mongoosejs.com/) - node CRUD db  <br/>
[??](??) - api document

**Installation.**

```bash
$ brew install mongodb
$ npm install restify
$ npm install mongoose
```

```html
<!-- or install db through download site -->
<a href="http://www.mongodb.org/downloads"></a>
```

```
??
```

```
??
```

**node-restify**

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

**mongoose**

```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) // ...
  console.log('meow');
});
```


