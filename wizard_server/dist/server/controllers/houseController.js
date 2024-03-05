"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHouse = exports.getHousesV2 = exports.getHouses = exports.getByName = void 0;
const models_1 = require("../models");
const getByName = (name) => models_1.House.findOne({ name });
exports.getByName = getByName;
// not used
// Get all houses or house by name with pagination
const getHouses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, page = 1, limit = 5 } = req.query;
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        const skip = (pageNumber - 1) * limitNumber;
        let query = {};
        if (name) {
            const regex = new RegExp(name, 'i');
            query.name = regex;
        }
        const houses = yield models_1.House.find(query)
            .skip(skip)
            .limit(limitNumber);
        const numberOfHouses = yield models_1.House.countDocuments(query);
        res.status(200).json({
            success: true,
            data: {
                houses,
                currentPage: pageNumber,
                totalPages: Math.ceil(numberOfHouses / limitNumber)
            }
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("cannot fetch the items", error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
});
exports.getHouses = getHouses;
// get all houses or houses by name with partial match
const getHousesV2 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        let query = {};
        if (name) {
            const regex = new RegExp(name, 'i');
            query.name = regex;
        }
        const houses = yield models_1.House.find(query)
            .select('-__v')
            .populate({
            path: 'heads',
            select: '-__v'
        })
            .populate({
            path: 'traits',
            select: '-__v'
        })
            .exec();
        res.status(200).json({ success: true, houses });
    }
    catch (error) {
        // TODO: dry this
        let message = 'Something went wrong';
        if (error instanceof Error) {
            message = `${message} - ${error.message}`;
        }
        console.log(message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});
exports.getHousesV2 = getHousesV2;
// Create new House record
// TODO: need to implement auth to use this endpoint 
const createHouse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { heads, traits } = _a, houseData = __rest(_a, ["heads", "traits"]);
        const house = yield models_1.House.create(houseData);
        const createdHeads = yield models_1.Head.create(heads);
        const createdTraits = yield models_1.Trait.create(traits);
        house.heads = createdHeads.map(head => head._id);
        house.traits = createdTraits.map(trait => trait._id);
        yield house.save();
        res.status(201).json({
            success: true,
            house
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("error during creating record", error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
        console.log("something went wrog");
    }
});
exports.createHouse = createHouse;
//# sourceMappingURL=houseController.js.map