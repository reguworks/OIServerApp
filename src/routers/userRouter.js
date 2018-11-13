"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userRouter = /** @class */ (function () {
    function userRouter() {
        this.router = express.Router();
        this.router.use(function timeLog(req, res, next) {
            console.log('Time: ', Date.now());
            next();
        });
        // define the home page route
        this.router.get('/', function (req, res) {
            res.send('API works!');
        });
    }
    return userRouter;
}());
exports.default = new userRouter().router;
//# sourceMappingURL=userRouter.js.map