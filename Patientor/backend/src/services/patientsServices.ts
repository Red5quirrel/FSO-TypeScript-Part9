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

const getSinglePatient = (id: string) => {
  const patient = patientsData.find((pat) => pat.id === id);
  return patient;
};

const addPatients = (entry: NewPatientEntry): Patient => {
  const patients: Patient[] = patientsData;
  const newPatient = {
    id: uuid(),
    ...entry,
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, getNonSensitivePatientEntry, addPatients, getSinglePatient };
