"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const mongoose_1 = require("mongoose");
const HouseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    houseColours: {
        type: String,
        required: true,
    },
    founder: {
        type: String,
        required: true,
    },
    animal: {
        type: String,
        required: true,
    },
    element: {
        type: String,
        required: true,
    },
    ghost: {
        type: String,
        required: true,
    },
    commonRoom: {
        type: String,
        required: true,
    },
    heads: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Head",
        },
    ],
    traits: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Trait",
        },
    ],
}, {
    timestamps: true,
});
exports.House = (0, mongoose_1.model)("House", HouseSchema);
//# sourceMappingURL=House.js.map