"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const UserModel_1 = require("../Models/UserModel");
const UserModel_2 = require("../Models/UserModel");
let userController = class userController {
    LoginAs(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const Log = yield UserModel_1.Login(req.body.Correo, req.body.Contrasena);
                if (Log == null) {
                    res.status(404).send("Usuario no encontrado");
                }
                else {
                    res.status(200).json(Log);
                }
            }
            catch (e) {
                logger_1.Logger.Err(e);
            }
        });
    }
    RegisterAs(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const Log = yield UserModel_2.addUser(req.body);
            res.status(200).send("Ok");
        });
    }
};
tslib_1.__decorate([
    core_1.Post('Login'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], userController.prototype, "LoginAs", null);
tslib_1.__decorate([
    core_1.Post('Register'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], userController.prototype, "RegisterAs", null);
userController = tslib_1.__decorate([
    core_1.Controller('api/user')
], userController);
exports.default = userController;
//# sourceMappingURL=userController.js.map