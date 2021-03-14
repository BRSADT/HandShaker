"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.Login = void 0;
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const BCRYPT_SALT_WORK_FACTOR = 10;
const UserSchema = new mongoose_1.Schema({
    Nombre: { type: String },
    Correo: { type: String, required: true, index: { unique: true } },
    Contrasena: { type: String, required: true, }
});
UserSchema.pre('save', function preSaveAddPasswordHash(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt_1.default.genSalt(BCRYPT_SALT_WORK_FACTOR, (errorSalt, salt) => {
        if (errorSalt) {
            return next(errorSalt);
        }
        bcrypt_1.default.hash(user.Contrasena, salt, (errorHash, hash) => {
            if (errorHash) {
                return next(errorHash);
            }
            user.Contrasena = hash;
            next();
        });
    });
});
UserSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const user = this;
        const isMatch = yield bcrypt_1.default.compare(candidatePassword, user.Contrasena);
        return isMatch;
    });
};
const UserModel = mongoose_1.model('Usuario', UserSchema);
exports.default = UserModel;
function Login(Correo, Contrasena) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const candidateUser = yield UserModel.findOne({ Correo });
        if (!candidateUser) {
            throw new Error('User not found');
        }
        const match = candidateUser.comparePassword(Contrasena);
        if (match) {
            return candidateUser;
        }
        else {
            return null;
        }
    });
}
exports.Login = Login;
function addUser(input) {
    const rec = UserModel.create(input);
    return rec;
}
exports.addUser = addUser;
//# sourceMappingURL=UserModel.js.map