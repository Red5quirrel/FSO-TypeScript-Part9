import { NewPatientEntry, Gender } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((g) => g.toString())
    .includes(param);
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorect or missing ssn");
  }

  return ssn;
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorect or missing date");
  }

  return date;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error("Incorect or missing name");
  }

  return name;
};

const parseOcupation = (ocupation: unknown): string => {
  if (!ocupation || !isString(ocupation)) {
    throw new Error("Incorect or missing ocupation");
  }

  return ocupation;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error("Incorect or missing gender");
  }

  return gender;
};

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if ("name" in object && "dateOfBirth" in object && "gender" in object && "occupation" in object && "ssn" in object) {
    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      gender: parseGender(object.gender),
      occupation: parseOcupation(object.occupation),
      ssn: parseSsn(object.ssn),
    };

    return newEntry;
  }
  throw new Error("Some fields are missing");
};
