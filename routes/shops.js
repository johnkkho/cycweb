var express = require('express');
var router = express.Router();

/* GET shops Pages. */
router.get('/attractions', function(req, res, next) {
    res.render('shop/attraction', { title: 'Shopping Cart', setLayout: 1, navBar: 1 });
});

router.get('/deals', function(req, res, next) {
    res.render('shop/deals', { title: 'Shopping Cart', setLayout: 1, navBar: 1 });
});

router.get('/hotels', function(req, res, next) {
    res.render('shop/hotels', { title: 'Shopping Cart', setLayout: 1, navBar: 1 });
});

router.get('/services', function(req, res, next) {
    res.render('shop/services', { title: 'Shopping Cart', setLayout: 1, navBar: 1 });
});

router.get('/gallery', function(req, res, next) {
    res.render('shop/gallery', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

router.get('/products', function(req, res, next) {
    res.render('shop/products', { title: 'Shopping Cart', setLayout: 1, navBar: 1 });
});

router.get('/product_details', function(req, res, next) {
    res.render('shop/product_details', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

router.get('/hotel_details', function(req, res, next) {
    res.render('shop/hotel_details', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

router.get('/service_details', function(req, res, next) {
    res.render('shop/service_details', { title: 'Shopping Cart', setLayout: 1, navBar: 0 });
});

module.exports = router;