"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@overnightjs/core");
const logger_1 = require("@overnightjs/logger");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const express = tslib_1.__importStar(require("express"));
const path = tslib_1.__importStar(require("path"));
const http_1 = tslib_1.__importDefault(require("http"));
const userController_1 = tslib_1.__importDefault(require("./controllers/userController"));
const bodyParser = tslib_1.__importStar(require("body-parser"));
class MainServer extends core_1.Server {
    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(express.static(MainServer.PATH));
        this.port = process.env.PORT || MainServer.PORT;
        this.setupControllers();
        if (process.env.NODE_ENV !== 'production') {
            this.app.get('/', (req, res) => res.send(MainServer.DEV_MSG));
        }
        else {
            this.app.get('/', (req, res) => res.sendFile(path.join(MainServer.PATH, 'index.html')));
        }
    }
    setupControllers() {
        const controllers = [new userController_1.default()];
        super.addControllers(controllers);
    }
    configureDB(callback) {
        const connection = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}`;
        mongoose_1.default.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
            .then(() => {
            logger_1.Logger.Info("Connected succesfully to Mongo");
            callback();
        }).catch(err => {
            logger_1.Logger.Err(err);
        });
    }
    start() {
        this.configureDB(() => {
            const server = new http_1.default.Server(this.app);
            server.listen(this.port, () => {
                logger_1.Logger.Imp(MainServer.SERVER_START_MSG + this.port);
            });
        });
    }
}
MainServer.PORT = 3001;
MainServer.SERVER_START_MSG = 'Server started on port: ';
MainServer.DEV_MSG = 'Express Server is running in development mode. ' +
    'No front-end content is being served.';
MainServer.PATH = path.join(__dirname, 'public', 'front');
exports.default = MainServer;
//# sourceMappingURL=Server.js.map