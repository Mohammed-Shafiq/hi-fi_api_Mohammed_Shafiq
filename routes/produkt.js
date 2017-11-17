const db = require('../config/sql').connect();

module.exports = function (app) {
    app.get('/produkt', function (req, res) {
        db.query('select * from udstyr', function (err, data) { /* "vælg alt fra udstyr" */
            res.send(data);
        })
    })
};
