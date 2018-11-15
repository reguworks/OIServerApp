"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var connection = new mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'app',
    password: '1234',
    database: 'insurance'
});
exports.default = connection;
//# sourceMappingURL=db.js.map