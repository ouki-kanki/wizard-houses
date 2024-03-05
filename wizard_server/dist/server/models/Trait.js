"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trait = void 0;
const mongoose_1 = require("mongoose");
const traitSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
});
exports.Trait = (0, mongoose_1.model)('Trait', traitSchema);
//# sourceMappingURL=Trait.js.map