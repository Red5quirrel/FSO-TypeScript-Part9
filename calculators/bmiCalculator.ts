type BMIResults = string;

interface BmiValues {
  heightValue: number;
  weightValue: number;
}

const parseArgumentsBMI = (args: string[]): BmiValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      heightValue: Number(args[2]),
      weightValue: Number(args[3]),
    };
  } else {
    throw new Error("You provided values were not numbers");
  }
};

let resultOfBmi: string;
export const calculateBmi = (heightCm: number, weight: number): BMIResults => {
  const bmi = weight / Math.pow(heightCm / 100, 2);

  if (heightCm <= 0 || weight <= 0) {
    resultOfBmi = "Height and weight cannot be both zero or negative numbers.";
  } else if (bmi <= 16.0) {
    resultOfBmi = "Underweight (Severe thinness)";
  } else if (bmi >= 16.0 && bmi <= 16.9) {
    resultOfBmi = "Underweight (Moderate thinness)";
  } else if (bmi >= 17.0 && bmi <= 18.4) {
    resultOfBmi = "Underweight (Mild thinness)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultOfBmi = "Normal (healthy weight)";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    resultOfBmi = "Overweight (Pre-obese)";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    resultOfBmi = "Obese (Class I)";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    resultOfBmi = "Obese (Class II)";
  } else if (bmi >= 40.0) {
    resultOfBmi = "Obese (Class III)";
  }
  console.log(resultOfBmi);
  return resultOfBmi;
};

try {
  const { heightValue, weightValue } = parseArgumentsBMI(process.argv);
  calculateBmi(heightValue, weightValue);
} catch (error) {
  let errorMessage = "Something went wrong. ";

  if (error instanceof Error) {
    errorMessage += `Error: ${error.message}`;
  }
  console.log(errorMessage);
}
