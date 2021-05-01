"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.Login = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const BCRYPT_SALT_WORK_FACTOR = 10;
require("mongoose-schema-extend");
const PhoneModel_1 = tslib_1.__importDefault(require("./PhoneModel"));
const UserSchema = new mongoose_1.Schema({
    Email: { type: String, required: true, index: { unique: true } },
    Password: { type: String, required: true, },
    Name: { type: String },
    LastName: { type: String },
    Id: { type: String },
    Phones: { type: [PhoneModel_1.default] }
});
UserSchema.pre('save', function preSaveAddPasswordHash(next) {
    console.log("here ");
    const user = this;
    bcrypt_1.default.genSalt(BCRYPT_SALT_WORK_FACTOR, (errorSalt, salt) => {
        if (errorSalt) {
            return next(errorSalt);
        }
        bcrypt_1.default.hash(user.Password, salt, (errorHash, hash) => {
            if (errorHash) {
                return next(errorHash);
            }
            console.log("hash generado" + hash);
            user.Password = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const user = this;
        console.log("entrada " + candidatePassword);
        console.log("contra usuario  " + user.Password);
        const isMatch = yield bcrypt_1.default.compare(candidatePassword, user.Password);
        console.log("RES" + isMatch);
        return isMatch;
    });
};
const UserModel = mongoose_1.model('User', UserSchema);
exports.default = UserModel;
function Login(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log("Email  " + input.Email);
        console.log("Password  " + input.Password);
        const candidateUser = yield UserModel.findOne({ Email: input.Email });
        if (!candidateUser) {
            return "2";
        }
        const match = yield candidateUser.comparePassword(input.Password);
        console.log("resultado  " + match);
        if (match) {
            return candidateUser;
        }
        else {
            return "3";
        }
    });
}
exports.Login = Login;
function addUser(input) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const rec = yield UserModel.create(input);
        return rec;
    });
}
exports.addUser = addUser;
//# sourceMappingURL=UserModel.js.map