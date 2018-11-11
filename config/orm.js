/* * `selectAll()`
* `insertOne()`
* `updateOne()`
 */

var connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, data) {
            if(err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, column, value) {
        var queryString = "INSERT INTO ?? (?) VALUES ?";
        connection.query(querystring, [table, column, value], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function() {
        var queryString = "";
        connection.query();
    }
}

module.exports = orm;