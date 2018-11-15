"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController_1 = require("../controllers/userController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.controller = new userController_1.UserController();
    }
    Routes.prototype.routes = function (app) {
        app.route('/users')
            .get(this.controller.getAllUsers);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map