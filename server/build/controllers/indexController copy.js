"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class indexControler {
    index(req, res) {
        res.send('Hello');
    }
}
exports.index = new indexControler();
