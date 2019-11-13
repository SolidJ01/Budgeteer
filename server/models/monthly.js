const db = require('../database');

class Monthly {
  static retrieveAll(callback) {
    db.query('SELECT id, name, amount FROM monthlyexpenses', function(err, res) {
      if (err.error) {
        return callback(err);
      }
      callback(res);
    });
  }

  static insert() {
    db.query('INSERT INTO monthlyexpenses (name, amount) VALUES ($1, $2)', [name], [amount], function(err, res) {
      if (err.error)
        return callback(err);
      callback(res);
    });
  }
}

module.exports = Monthly;
