var connection = require("./connection.js");
var orm = require('orm');


var tableName = "burgers";

const orm = {
        selectAll: function(cb) {
            connection.query("SELECT * FROM burgers", function(err, data) {
                if (err) { 
                    throw ersr; 
                }
                cb(result);
            });
        },
        insertOne: function (burgerName, cb) {
            const sqlQuery= 'INSERT INTO ' + burgers(burger_name) + VALUES('${burgerName}');
            connection.query(sqlQuery, function (err, data) {
                if (err) cb(err,null);
                cb(null, data)
            });
        },

        deleteOne: function (id,cd) {
            const sqlQuery= 'DELETE FROM burgers WHERE id = ${id}';
            connection.query(sqlQuery, function (err, data) {
                if (err){
                    throw err
                
                }0
            
            });
        }
}

module.exports = orm;
