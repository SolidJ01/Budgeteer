const db = require('../database');

class Cities {
  static retrieveAllExpenses(callback) {
    db.query('SELECT id, name, type, amount, subcontent  FROM indepitems WHERE type=\'Expenses\' ORDER BY id DESC', function (err, res) {
      if (err.error) {
        return callback(err);
      }
      callback(res);
    });
  }

  static retrieveAllIncome(callback) {
    db.query('SELECT id, name, type, amount, subcontent FROM indepitems WHERE type=\'Income\' ORDER BY id DESC', function (err, res) {
      if (err.error) {
        return callback(err);
      }
      callback(res);
    });
  }

  static insert() {
    db.query('INSERT INTO indepItems (title, item) VALUES ($1, $2)', [title], [item], function (err, res) {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Cities;
