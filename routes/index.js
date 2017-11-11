var express = require('express');
var router = express.Router();

/* GET home page. */ /* GET Static Pages */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('pages/about', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

router.get('/contact', function(req, res, next) {
    res.render('pages/contact', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

router.get('/insurance', function(req, res, next) {
    res.render('pages/insurance', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

router.get('/terms', function(req, res, next) {
    res.render('pages/terms', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

module.exports = router;
