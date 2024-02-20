"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../../data/patients"));
// const allPatients: Patient[] = patientsData;
const getPatients = () => {
    //   return allPatients;
    return patients_1.default;
};
const getNonSensitivePatientEntry = () => {
    return patients_1.default.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
exports.default = { getPatients, getNonSensitivePatientEntry };
