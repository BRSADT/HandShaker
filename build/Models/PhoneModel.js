"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneModel = void 0;
const mongoose_1 = require("mongoose");
const TelephoneSchema = new mongoose_1.Schema({
    Description: { type: String },
    Phone: { type: String }
});
const PhoneModel = mongoose_1.model('Phone', TelephoneSchema);
exports.PhoneModel = PhoneModel;
exports.default = TelephoneSchema;
//# sourceMappingURL=PhoneModel.js.map