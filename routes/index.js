const express = require('express');
var router = express.Router();

router.use('/contacts', require('./contacts'));
router.use('/api-docs', require('./swagger'));

router.get('/', function(req, res, next) {
  res.send('Tyler Tucker');
});

router.get('*', (req, res) => {
  res.send('404: oops, bad request!');
});

module.exports = router;