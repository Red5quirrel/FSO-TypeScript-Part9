import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, List, ListItem } from "@mui/material";
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

      {singlePatient?.entries.map((entries) => {
        return (
          <Box key={entries.id} bgcolor="#b6b6b67c" marginBottom={2} padding={1}>
            <h2>Entries:</h2>
            <Typography variant="h6">
              {entries.date}
              <span style={{ marginLeft: "10px" }}>{entries.description}</span>
            </Typography>

            <List>
              {entries.diagnosisCodes?.map((code, index) => (
                <ListItem key={index}>{code}</ListItem>
              ))}
            </List>
          </Box>
        );
      })}
    </div>
  );
};

export default SinglePatient;
