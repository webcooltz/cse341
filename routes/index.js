const express = require('express');
var router = express.Router();

router.use('/contacts', require('./contacts'));

router.get('/', function(req, res, next) {
  res.send('Tyler Tucker');
});

module.exports = router;