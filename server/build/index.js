"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const games_routes_1 = __importDefault(require("./routes/games.routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Type script class
class Server {
    //Constructor, this funciton execute when the class is created.
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Configuration function
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
    }
    //Routes function
    routes() {
        this.app.use(express_1.default.json());
        this.app.use(index_routes_1.default);
        this.app.use('/api/games', games_routes_1.default);
        this.app.use(cors_1.default());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Start Function
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on port: ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
