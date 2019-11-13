var express = require('express');
var Monthly = require('../models/monthly');

var router = express.Router();

router.get('/', function(req, res) {
  Monthly.retrieveAll(function(err, monthly) {
    if (err)
      return res.json(err);
    return res.json(monthly);
  });
});

router.post('/', function(req, res) {
  var item = req.body.item;

  Monthly.insert(item, function(err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
