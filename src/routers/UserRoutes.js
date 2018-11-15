"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("../controllers/UserController");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.controller = new UserController_1.UserController();
    }
    UserRoutes.prototype.routes = function (app) {
        app.route('/users')
            .get(this.controller.getAllUsers)
            .post(this.controller.createUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=UserRoutes.js.map