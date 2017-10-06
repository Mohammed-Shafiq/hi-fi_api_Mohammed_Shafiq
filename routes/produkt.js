const db = require('../config/sql.js').connect();

module.exports = function (app) {
    app.get('/produkt', function (req, res) {
        db.query('select * from udstyr', function (err, data) {
            res.send(data);
        })
    })
}

