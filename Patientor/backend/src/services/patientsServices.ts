import { v1 as uuid } from "uuid";
import patientsData from "../../data/patients";
import { Patient, NonSensitivePatientEntry, NewPatientEntry } from "../types";

const getPatients = (): Patient[] => {
  return patientsData;
};

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatients = (entry: NewPatientEntry): Patient => {
  const patients: Patient[] = patientsData;
  const newPtient = {
    id: uuid(),
    ...entry,
  };

  patients.push(newPtient);
  return newPtient;
};

export default { getPatients, getNonSensitivePatientEntry, addPatients };
