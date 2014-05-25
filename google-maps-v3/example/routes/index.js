var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET Index page. */
router.get('/', function(req, res) {
  var variables = {
      title: 'Index',
      canonical: app.get('domain')
  };

  res.render('index', variables);
});

module.exports = router;
