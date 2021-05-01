"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangePremium = exports.addUser = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = require("mongoose");
const logger_1 = require("@overnightjs/logger");
const UserModel_1 = tslib_1.__importDefault(require("./UserModel"));
const AddressModel_1 = tslib_1.__importDefault(require("./AddressModel"));
const WorkerModel = UserModel_1.default.discriminator('Worker', new mongoose_1.Schema({
    IdWorker: { type: String },
    Category: { type: String },
    Profession: { type: String },
    JobDescription: { type: String },
    EmailContact: { type: [String] },
    isPremium: { type: Boolean },
    UserType: { type: String },
    Address: { type: [AddressModel_1.default] }
}));
function addUser(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        logger_1.Logger.Info(input, true);
        console.log(input.Profession);
        const rec = yield WorkerModel.create(input);
        return rec;
    });
}
exports.addUser = addUser;
function ChangePremium(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let query;
        if (input.isPremium == false) {
            query = { isPremium: 'true' };
        }
        else {
            query = { isPremium: 'false' };
        }
        WorkerModel.findOneAndUpdate({ Email: input.Email }, query);
    });
}
exports.ChangePremium = ChangePremium;
//# sourceMappingURL=WorkerModel.js.map