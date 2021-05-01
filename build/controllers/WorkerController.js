"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const WorkerModel_1 = require("../Models/WorkerModel");
let WorkerController = class WorkerController {
    RegisterAs(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.Info(req.body, true);
            const Log = yield WorkerModel_1.addUser(req.body);
            res.status(200).send("Ok");
        });
    }
    ChangePremium(req, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            logger_1.Logger.Info(req.body, true);
            const Log = yield WorkerModel_1.addUser(req.body);
            res.status(200).send("Ok");
        });
    }
};
tslib_1.__decorate([
    core_1.Post('Register'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "RegisterAs", null);
tslib_1.__decorate([
    core_1.Post('ChangePremium'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkerController.prototype, "ChangePremium", null);
WorkerController = tslib_1.__decorate([
    core_1.Controller('api/Worker')
], WorkerController);
exports.default = WorkerController;
//# sourceMappingURL=WorkerController.js.map