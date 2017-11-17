const db = require('../config/sql.js').connect();

const sqlCall =  `SELECT * FROM udstyr`

module.exports = function (app){
    server.get('/produkt', function (req, res)
    {
        db.query(sqlCall, function (err, data)  
        {
            res.send(data);
        })
    });

}
