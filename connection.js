const mysql = require("mysql2")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "529019Henry",
    database: "employeedb"
})

connection.connect(function(err){
    if (err) throw err
    console.log("Connected!")
})

module.exports = connection;