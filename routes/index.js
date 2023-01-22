const express = require('express');
var router = express.Router();

router.use('/contacts', require('./contacts'));

router.get('/', function(req, res, next) {
  res.send('Tyler Tucker');
});

// 404
router.get('*', (req, res) => {
  res.send('404: oops, bad request!');
});

module.exports = router;