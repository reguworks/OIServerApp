"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userController_1 = require("../controllers/userController");
var dbConnection_1 = require("../db/dbConnection");
var userRoutes = /** @class */ (function () {
    function userRoutes() {
        this.controller = new userController_1.userController(dbConnection_1.default);
        this.router = express.Router();
    }
    userRoutes.prototype.routes = function (app) {
        this.initDefaultRoute();
        this.initUsersRoute();
        app.route('/users')
            .get(this.controller.getAllUsers);
    };
    userRoutes.prototype.initDefaultRoute = function () {
        this.router.get('/', function (req, res) {
            res.send('API works!');
            //Call a method to call StoredProcedure to select all users. This must be done in a controller.
        });
    };
    userRoutes.prototype.initUsersRoute = function () {
        this.router.get('/users', this.controller.getAllUsers);
    };
    return userRoutes;
}());
exports.userRoutes = userRoutes;
//will make it like this: https://github.com/LaurenceHo/angular4-express-mysql/tree/master/server/src
//# sourceMappingURL=userRouters.js.map