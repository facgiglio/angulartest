"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class gamesControler {
    index(req, res) {
        console.log(database_1.default.query('DESCRIBE game'));
        res.send('Games');
    }
}
exports.default = new gamesControler();
