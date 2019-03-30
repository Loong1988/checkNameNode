var express = require('express');
var router = express.Router();
var url = require('url');
/* GET users listing. */
router.get('/test', function(req, res, next) {
  console.log('----------');
  
  console.log(encodeURI(req.url))
  var parseObj = url.parse(req.url, true);
  console.log(parseObj);

  let obj={
    code:0,
    message:'ceshi',
    count:13
  }
  res.send(obj);
});

module.exports = router;
