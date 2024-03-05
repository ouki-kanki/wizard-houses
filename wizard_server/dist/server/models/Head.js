"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Head = void 0;
const mongoose_1 = require("mongoose");
// TODO how to reference to the house 
const headSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
});
exports.Head = (0, mongoose_1.model)('Head', headSchema);
//# sourceMappingURL=Head.js.map