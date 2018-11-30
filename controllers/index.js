var express = require('express')
  , router = express.Router();

router.use('/brick', require('./brick'));

router.get('/', function(req, res) {
  res.send('nothing here');
});

module.exports = router;
