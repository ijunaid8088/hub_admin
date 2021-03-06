var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  getSession = req.session;
  if (getSession.statusCode == 200) {
    res.render('dashboard', { title: 'Dashboard' });
  }
  else{
    res.render('index', { title: "Hub Admin" });
  }
});

module.exports = router;