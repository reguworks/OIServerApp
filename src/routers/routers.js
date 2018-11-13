"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRouter = /** @class */ (function () {
    function userRouter() {
        this.router = express.Router();
        this.configHomePage();
    }
    userRouter.prototype.configHomePage = function () {
        this.router.get('/', function (req, res) {
            res.send('API works!');
        });
    };
    return userRouter;
}());
exports.default = new userRouter().router;
//# sourceMappingURL=routers.js.map