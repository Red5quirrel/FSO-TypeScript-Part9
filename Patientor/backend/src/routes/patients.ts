import express from "express";
import patientsServices from "../services/patientsServices";
import { toNewPatientEntry } from "../utils";

const route = express.Router();

route.get("/", (_req, res) => {
  res.json(patientsServices.getNonSensitivePatientEntry());
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  const patient = patientsServices.getSinglePatient(id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).end();
  }
});

route.post("/", (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body);

    const addPatients = patientsServices.addPatients(newPatient);
    res.json(addPatients);
  } catch (error: unknown) {
    let errorMsg = "Something went wrong. ";
    if (error instanceof Error) {
      errorMsg += `${error.message}`;
    }

    res.status(400).send(errorMsg);
  }
});

export default route;
