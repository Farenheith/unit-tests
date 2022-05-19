"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const get_value_1 = require("./get-value");
const get_double_1 = require("./get-double");
function main(param) {
    console.log((0, get_double_1.getDouble)(param !== undefined ? Number(param) : 11));
    if (param !== undefined) {
        console.log((0, get_value_1.getValue)(param));
    }
}
exports.main = main;
//# sourceMappingURL=main.js.map