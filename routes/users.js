var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
    res.render('user/signup', {title: '注冊帳戶', navBar: 0});
});

router.get('/profile', function(req, res, next) {
    res.render('user/profile', {title: '我的帳戶', navBar: 0});
});

module.exports = router;
