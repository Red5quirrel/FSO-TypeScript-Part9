import express from "express";
import cors from "cors";
import diagnosesRoute from "./src/routes/diagnoses";
import patientsRoute from "./src/routes/patients";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use("/api/diagnoses", diagnosesRoute);
app.use("/api/patients", patientsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
