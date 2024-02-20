interface PartProps {
  description: string;
  name: string;
  exerciseCount: number;
  groupProjectCount: number | null;
  backgroundMaterial: string;
  requirements: string[];
}

const Part = (props: PartProps) => {
  return (
    <>
      <p style={{ fontWeight: "bold", marginBottom: 0 }}>
        {props.name} {props.exerciseCount}
      </p>
      {props.groupProjectCount ? <p style={{ margin: 0 }}>Project exercise: {props.groupProjectCount}</p> : ""}
      <p style={{ margin: 0 }}>{props.description}</p>
      <p style={{ margin: 0 }}>{props.backgroundMaterial}</p>
      {props.requirements.length > 1 && (
        <p style={{ margin: 0 }}>
          Required skills: <span>{props.requirements.join(", ")} </span>{" "}
        </p>
      )}
    </>
  );
};

export default Part;
