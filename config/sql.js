const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '46.101.227.145',
            'user': 'root',
            'password': '',
            'database': 'hi-fi'
        });
    }
};
