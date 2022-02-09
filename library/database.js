const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_express'
});

connection.connect((err) => {
    if (!!err) {
        console.log("Tidak tersambung \n Error: " + JSON.stringify(err, undefined, 2));
    } else {
        console.log("Koneksi berhasil");
    }
})

module.exports = connection;