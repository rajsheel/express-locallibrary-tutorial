var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* Cool users listing. */
router.get('/cool', function(req, res, next) {
  res.send('You are so cool Atul Rajsheel!!!');
});

module.exports = router;
