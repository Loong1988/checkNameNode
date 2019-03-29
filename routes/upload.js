// var fs = require('fs');
// var express = require('express');
// var multer  = require('multer');

// var router = express.Router();
// var upload = multer({dest: 'upload_tmp/'});

// router.post('/', upload.any(), function(req, res, next) {
//     console.log('上传的文件信息：1');
//     console.log(req.files[0]);  // 上传的文件信息

//     var des_file = "./upload/" + req.files[0].originalname;
//     fs.readFile( req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if( err ){
//                 console.log('错误警告：2');

//                 console.log( err );
//             }else{
//                 response = {
//                     message:'File uploaded successfully',
//                     filename:req.files[0].originalname
//                 };
//                 console.log( response );
//                 res.end( JSON.stringify( response ) );
//             }
//         });
//     });
// });

var fs = require('fs');
var express = require('express');
var multer = require('multer'); //这是一个处理上传文件的模块，将其引入;
var pathLib = require('path');
var app = express();
var upload = multer({
    dest: 'upload_tmp/'
});
var router = express.Router();

router.post('/', upload.any(), function (req, res, next) {
    console.log('--1');
    console.log(req.files[0])

    var newname = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
    //为上传的文件添加后缀
    fs.rename(req.files[0].path, newname, function (err) {
        if (!err) {
            res.send('upload success');
        } else {
            res.send('upload fault');
        }
    })
});


module.exports = router;