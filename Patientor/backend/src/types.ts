// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export type Diagnosis = {
  code: string;
  name: string;
  latin?: string;
};

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export type Patient = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
};

export type NonSensitivePatientEntry = Omit<Patient, "ssn" | "entries">;
export type NewPatientEntry = Omit<Patient, "id">;
