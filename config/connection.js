var mysql = require("mysql");
var express = require("express")
var app = express()
// Set up our connection information
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

var connection = mysql.createConnection(source.localhost);

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database:'todoagain_db'
  });
};

// Connect to the database
connection.connect();

// Export connection
module.exports = connection;
