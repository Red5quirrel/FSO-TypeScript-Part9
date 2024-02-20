import Content from "./Content";

import Header from "./Header";
import Total from "./Total";

const App = () => {
  const courseName = "Half Stack application development";

  const assertNever = (value: never): never => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
  };

  interface CoursePartDescription {
    description?: string;
  }

  interface CoursePartBase extends CoursePartDescription {
    name: string;
    exerciseCount: number;
  }

  interface CoursePartBasic extends CoursePartBase {
    // description: string;
    kind: "basic";
  }

  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group";
  }

  interface CoursePartBackground extends CoursePartBase {
    // description: string;
    backgroundMaterial: string;
    kind: "background";
  }

  interface CoursePartSpecial extends CoursePartBase {
    name: string;
    exerciseCount: number;
    // description: string;
    requirements: string[];
    kind: "special";
  }

  type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;
  // type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground;

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group",
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background",
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special",
    },
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header courseName={courseName} />
      {courseParts.map((part, index) => {
        switch (part.kind) {
          case "basic":
            return (
              <Content
                key={index}
                name={part.name}
                exerciseCount={part.exerciseCount}
                description={part.description ? part.description : ""}
                backgroundMaterial={""}
                groupProjectCount={null}
                requirements={[]}
              />
            );
          case "group":
            return (
              <Content
                key={index}
                name={part.name}
                exerciseCount={part.exerciseCount}
                description={part.description ? part.description : ""}
                groupProjectCount={part.groupProjectCount}
                backgroundMaterial={""}
                requirements={[]}
              />
            );
          case "background":
            return (
              <Content
                key={index}
                name={part.name}
                exerciseCount={part.exerciseCount}
                description={part.description ? part.description : ""}
                groupProjectCount={null}
                backgroundMaterial={part.backgroundMaterial}
                requirements={[]}
              />
            );
          case "special":
            return (
              <Content
                key={index}
                name={part.name}
                exerciseCount={part.exerciseCount}
                description={part.description ? part.description : ""}
                groupProjectCount={null}
                backgroundMaterial={""}
                requirements={part.requirements}
              />
            );

          default:
            return assertNever(part);
        }
      })}

      <Total totalExercises={totalExercises} />
    </div>
  );
};

export default App;
