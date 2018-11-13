"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var userRouters_1 = require("./routers/userRouters");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        //Create routers for all subroutes
        this.app.use('/user', userRouters_1.default);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map