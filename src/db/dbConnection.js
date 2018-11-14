"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var dbService_1 = require("../db/dbService");
// Don't actually connect here
// Just create the object so it's ready for connection.
var connection = new mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'app',
    password: '1234',
    database: 'insurance'
});
// Wire up the internal db connection
// Remember this is a singleton.
exports.default = new dbService_1.dbService(connection);
//# sourceMappingURL=dbConnection.js.map