"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const houseController_1 = require("../controllers/houseController");
const router = express_1.default.Router();
router.get('/houses', houseController_1.getHousesV2);
// router.post('/houses', createHouse);
exports.default = router;
//# sourceMappingURL=main.js.map