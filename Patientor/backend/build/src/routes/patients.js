"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientsServices_1 = __importDefault(require("../services/patientsServices"));
const route = express_1.default.Router();
route.get("/", (_req, res) => {
    console.log("GET PATIENTS");
    res.send(patientsServices_1.default.getNonSensitivePatientEntry());
});
exports.default = route;
