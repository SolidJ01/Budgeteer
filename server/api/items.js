var express = require('express');
var Items = require('../models/items');

var router = express.Router();

router.get('/expenses', function (req, res) {
  Items.retrieveAllExpenses(function (err, cities) {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

router.get('/income', function (req, res) {
  Items.retrieveAllIncome(function (err, cities) {
    if (err)
      return res.json(err);
    return res.json(cities);
  });
});

router.post('/', function (req, res) {
  var city = req.body.city;

  Items.insert(city, function (err, result) {
    if (err)
      return res.json(err);
    return res.json(result);
  });
});

module.exports = router;
