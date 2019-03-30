var express = require('express');
var router = express.Router();
var qs = require('querystring'); //引入querystring模块
var formidable = require('formidable')
var url = require('url');
/* GET home page. */



router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express-123'
  });
});
router.get('/one', function (req, res, next) {

  console.log(encodeURI(req.url))
  var parseObj = url.parse(req.url, true);
  console.log('-----get-------canshu=' + parseObj.query.a);


  let obj = {
    code: 0,
    message: 'ceshi-one-get',
    count: 13333
  }
  res.send(obj);
});

router.post('/two', function (req, res, next) {
  console.log('-------------');
  console.log(encodeURI(req.url))
  var parseObj = url.parse(req.url, true);
  console.log('------post------canshu=' + parseObj.query.a);
console.log(res.body);



  

  let obj = {
    code: 0,
    message: 'post-1',
    count: 13333
  }
  res.send(obj);
});
module.exports = router;