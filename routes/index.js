var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-123' });
});
router.get('/one', function(req, res, next) {
  let obj={
    code:0,
    message:'ceshi-one',
    count:12
  }
  res.send(obj);
});
module.exports = router;
