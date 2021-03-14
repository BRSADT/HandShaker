"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Server_1 = tslib_1.__importDefault(require("./Server"));
require('dotenv').config();
const server = new Server_1.default();
server.start();
//# sourceMappingURL=index.js.map