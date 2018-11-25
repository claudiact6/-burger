var connection = require("./connection");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, data) {
            cb(data);
        });
    },
    insertOne: function(table, column, value, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, col1, val1, col2, val2) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, col1, val1, col2, val2], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }
};

module.exports = orm;