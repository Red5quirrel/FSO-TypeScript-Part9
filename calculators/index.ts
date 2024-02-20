import express from "express";
import qs from "qs";
import bodyParser from "body-parser";
import { calculateBmi } from "./bmiCalculator";
// import { calculateExercises, CalculatorValues, Results } from "./exerciseCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(bodyParser.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = qs.parse(req.url.split("?")[1]);

  const parsedHeight = Number(height);
  const parsedWeight = Number(weight);

  if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
    return res.status(400).json({ error: "Malformed parameters" });
  }

  const bmiResult = {
    weight: parsedWeight,
    height: parsedHeight,
    bmi: calculateBmi(parsedHeight, parsedWeight),
  };

  return res.json(bmiResult);
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { target, daily_exercises } = req.body;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!target || !daily_exercises.length) {
    return res.status(400).json({ error: "Target and exercises can't be empty" });
  }

  if (!Array.isArray(daily_exercises) || typeof target !== "number" || !daily_exercises.every((hours) => typeof hours === "number")) {
    return res.status(400).json({ error: "Malformed parameters" });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(target, daily_exercises);
  return res.json({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
