"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var dbService = /** @class */ (function () {
    function dbService() {
    }
    dbService.prototype.initMySQL = function () {
        var mysqlConnection = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'app',
            password: '1234',
            database: 'insurance'
        });
        mysqlConnection.connect(function (err) {
            if (!err) {
                console.log('DB connection successful!');
            }
            else
                console.log('DB connection failed: ' + JSON.stringify(err, undefined, 2));
        });
    };
    return dbService;
}());
exports.default = new dbService();
//# sourceMappingURL=dbService.js.map