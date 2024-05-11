import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Female, Male } from "@mui/icons-material";
import { Patient } from "../../types";
import patientService from "../../services/patients";

const SinglePatient = () => {
  const id = useParams().id;
  const [singlePatient, setSinglePatient] = useState<Patient>();

  useEffect(() => {
    const fetchSinglePatient = async () => {
      if (id) {
        const getPatient = await patientService.getSinglePatient(id);
        setSinglePatient(getPatient);
      }
    };
    void fetchSinglePatient();
  }, [id]);

  return (
    <div>
      <h1>
        {singlePatient?.name}
        <span>{singlePatient?.gender === "female" ? <Female /> : <Male />}</span>
      </h1>
      <p>ssh: {singlePatient?.ssn}</p>
      <p>Occupation: {singlePatient?.occupation}</p>
    </div>
  );
};

export default SinglePatient;
