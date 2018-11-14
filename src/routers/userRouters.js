"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var userController_1 = require("../controllers/userController");
var controller = userController_1.default;
var router = express.Router();
router.get('/', function (req, res) {
    res.send('API works!');
    //Call a method to call StoredProcedure to select all users. This must be done in a controller.
});
router.get('/users', controller.getAllUsers);
exports.default = router;
//# sourceMappingURL=userRouters.js.map