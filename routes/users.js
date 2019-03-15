var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let obj={
    code:0,
    message:'ceshi',
    count:12
  }
  res.send(obj);
});

module.exports = router;
