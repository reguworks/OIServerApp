"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userController_1 = require("../controllers/userController");
var dbService_1 = require("../db/dbService");
var userRouter = /** @class */ (function () {
    function userRouter() {
        this.router = express.Router();
        this.controller = new userController_1.userController(new dbService_1.dbService({
            host: 'localhost',
            port: '3306',
            user: 'app',
            password: '1234',
            database: 'insurance'
        }));
        this.configHomePage();
        this.configReadByID();
    }
    userRouter.prototype.configHomePage = function () {
        this.router.get('/', function (req, res) {
            //res.send('API works!')
            //Call a method to call StoredProcedure to select all users. This must be done in a controller.
        });
    };
    userRouter.prototype.configReadByID = function () {
        this.router.get('/users', this.controller.getAllUsers);
    };
    return userRouter;
}());
exports.default = new userRouter().router;
//# sourceMappingURL=userRouters.js.map