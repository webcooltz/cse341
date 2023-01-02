const express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Tyler Tucker');
});

module.exports = router;