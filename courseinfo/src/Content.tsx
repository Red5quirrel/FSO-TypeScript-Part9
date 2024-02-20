import Part from "./Part";

interface CourseContent {
  name: string;
  exerciseCount: number;
  description: string;
  groupProjectCount: number | null;
  backgroundMaterial: string;
  requirements: string[];
}

const Content = (props: CourseContent) => {
  return (
    <Part
      description={props.description}
      name={props.name}
      exerciseCount={props.exerciseCount}
      groupProjectCount={props.groupProjectCount}
      backgroundMaterial={props.backgroundMaterial}
      requirements={props.requirements}
    />
  );
};

export default Content;
