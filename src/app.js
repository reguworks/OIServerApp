"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var UserRoutes_1 = require("./routers/UserRoutes");
var App = /** @class */ (function () {
    function App() {
        this.routes = new UserRoutes_1.UserRoutes();
        this.userRoutes = new UserRoutes_1.UserRoutes();
        this.app = express();
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.userRoutes.routes(this.app);
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map