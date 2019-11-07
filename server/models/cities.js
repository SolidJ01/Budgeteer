const db = require('../database');

class Cities {
  static retrieveAll(callback) {
    db.query('SELECT title, item FROM indepitems', function (err, res) {
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
