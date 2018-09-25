var express = require('express');
var router = express.Router();

var arr=[];
arr.push({
                "name": 54,
                "displayName": 54
        });
arr.push({
                "name": 20,
                "displayName": 20
        });
/* GET users listing. */
router.get('/get', function(req, res, next) {
//  res.send('respond with a resource');
var map =
{
        "test": {
                "name": 54,
                "displayName": 54
        },
        "test2": {
                "name": 20,
                "displayName": 20
        }

};

res.send(JSON.stringify(arr));
});


router.post('/post', function(req, res, next) {
  //res.send('respond with a new post  resource');
console.log("Entered post");
//req.body.message="Success";
arr.push(req.body);
res.json(JSON.stringify(arr));

  console.log(req.body);
});


router.delete('/delete', function(req, res, next) {
  res.send('YAY!!...You have hit a delete resource');
});

module.exports = router;
