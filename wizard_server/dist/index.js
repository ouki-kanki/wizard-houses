"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./server/config/db"));
const main_1 = __importDefault(require("./server/routes/main"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
//middlewares
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// connect to DB
(0, db_1.default)();
// setup routes
app.use('/', main_1.default);
app.listen(PORT, () => {
    console.log(`the server is listening on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map