"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneModel = void 0;
const mongoose_1 = require("mongoose");
const AddressSchema = new mongoose_1.Schema({
    Address: { type: String },
    Number: { type: String },
    Reference: { type: String },
    LinkMaps: { type: String },
    Id: { type: String }
});
const PhoneModel = mongoose_1.model('Phone', AddressSchema);
exports.PhoneModel = PhoneModel;
exports.default = AddressSchema;
//# sourceMappingURL=AddressModel.js.map