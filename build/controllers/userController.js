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
                console.log("here");
                logger_1.Logger.Info(req.body.userObject, true);
                const Log = yield UserModel_1.Login(req.body.userObject);
                logger_1.Logger.Info(Log);
                switch (Log) {
                    case "2":
                        logger_1.Logger.Info("no encontrado");
                        logger_1.Logger.Info(res);
                        res.status(404).send("2");
                        break;
                    case "3":
                        logger_1.Logger.Info("no match");
                        logger_1.Logger.Info(res);
                        res.status(401).send("3");
                        break;
                    default:
                        logger_1.Logger.Info("encontrado");
                        logger_1.Logger.Info(Log);
                        res.status(200).json(Log);
                }
            }
            catch (e) {
                res.status(404).json("false");
                logger_1.Logger.Err(e);
            }
        });
    }
    RegisterAs(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.Info(req.body, true);
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