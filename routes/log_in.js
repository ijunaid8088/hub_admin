var express = require('express');
var request = require('request');
var session = require('express-session');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var username = req.body.username
  var formData = {
    password: req.body.password
  }
  request.post({
    url:'http://localhost:4000/api/users/'+ username +'',
    formData: formData,
    followAllRedirects: true,
    }, function optionalCallback(err, httpResponse, body) {
    if (err) {
      return console.error('Api call failed:', err);
    }
    setSession = req.session;
    setSession.body =  body;
    setSession.statusCode = httpResponse.statusCode;
    res.send(body)
  });
});

module.exports = router;
