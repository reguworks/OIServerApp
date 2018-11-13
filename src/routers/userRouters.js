"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRouter = /** @class */ (function () {
    function userRouter() {
        this.router = express.Router();
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
        this.router.get('/:id', function (req, res) {
            //res.send('API works again!')
            //Call a method to call StoredProcedure to select by ID. This must be done in a controller.
        });
    };
    return userRouter;
}());
exports.default = new userRouter().router;
//# sourceMappingURL=userRouters.js.map