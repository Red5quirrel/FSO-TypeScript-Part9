type TagetSucceded = true | false;
type Rating = 1 | 2 | 3;

export interface Results {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export interface CalculatorValues {
  target: number;
  hours: number[];
}

const parseArguments = (args: string[]): CalculatorValues => {
  if (args.length < 6) throw new Error("Not enough arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      target: Number(args[2]),
      // hours: Number(args[3]), // Here error: Type 'number' is not assignable to type 'number[]'
      hours: args.slice(3).map(Number),
    };
  } else {
    throw new Error("You provided values were not numbers");
  }
};

export const calculateExercises = (target: number, exerciseHours: number[]): Results => {
  let rating: Rating;
  let ratingDescription: string;

  const periodLength = exerciseHours.length;

  const trainingDays = exerciseHours.filter((hour) => hour > 0).length;
  const totalHours = exerciseHours.reduce((sum, hours) => sum + hours, 0);
  const average = totalHours / periodLength;
  const success: TagetSucceded = average >= target;

  if (success) {
    rating = 3;
    ratingDescription = "Well Done, you are doing a great job this week!";
  } else if (average >= target / 2) {
    rating = 2;
    ratingDescription = "Not too bad but could be better";
  } else {
    rating = 1;
    ratingDescription = "Don't worry if this week didn't go as planned. Consider setting smaller goals and gradually increasing your activity";
  }

  const result = {
    periodLength,
    trainingDays,
    average,
    success,
    target,
    rating,
    ratingDescription,
  };

  console.log(result);

  return result;
};

// console.log(calculateExercises([2, 2, 2, 2, 2, 2, 2], 1)); // rating 3
// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2)); // rating 2
// console.log(calculateExercises([0, 0, 2, 4, 0, 3, 1], 4)); // rating 1

try {
  const { target, hours } = parseArguments(process.argv);
  calculateExercises(target, hours);
} catch (error) {
  let errorMessage = "Something went wrong. ";

  if (error instanceof Error) {
    errorMessage += `Error: ${error.message}`;
  }
  console.log(errorMessage);
}
