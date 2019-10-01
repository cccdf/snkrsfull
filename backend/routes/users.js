var express = require('express');
var router = express.Router();
var nike = require('../models/nike');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('you are so cool');
});

router.get('/nike', function(req, res, next) {
  nike.find({}, (err, docs) => {
    // if (err) return res.json({ success: false, error: err });
    // console.log('Found Users :', data);
    // res.json(data.length);
    if (!err){ 
      console.log(docs);
      res.jsonp(docs);
  } else {throw err;}
  });
});

module.exports = router;
