import React from 'react';
import { useParams } from 'react-router-dom';
import jobsData from "../data.json";
import { Box, Chip, Typography } from '@mui/material';

function DetailPage() {
  const param = useParams();
  const datajobs = jobsData.jobs;
  const datajob = datajobs.find((job) => {
    if ( param.dataId === job.id) {
      return job;
    }
  })

  const modalStyle = {
    position: "absolute",
    backgroundColor: "#FFF",
    padding: "15px",
    zIndex: "1000",
    width: "100%",
    borderRadius: 4,
  };

  const style = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "65%",
    backgroundColor: "#fff",
    zIndex: "1000",
    borderRadius: 4,
    overflowY: "auto",
  };

  console.log(datajob);
    
  console.log(param);

  return (
    <Box sx={style}>
      <Box sx={modalStyle}>
        <Typography
          sx={{
            fontSize: 18,
            mb: 2,
            borderBottom: 1,
            textAlign: "center",
            color: "#FC9918",
          }}
          gutterBottom
        >
          {datajob.title}
        </Typography>
        <Typography sx={{ color: "#2C3333", fontSize: "17px" }} variant="body2">
          {datajob.description}
        </Typography>
        <Typography sx={{ mt: 1, mb: 1, color: "#2C3333" }}>
          City: {datajob.city}
        </Typography>
        <Typography
          sx={{
            color: "#2C3333",
          }}
        >
          Salary: {datajob.salaryLow} - {datajob.salaryHigh} VNĐ
        </Typography>
        <Typography sx={{ mt: 1, mb: 1, color: "#2C3333" }}>
          Posted: {datajob.postedDate}
        </Typography>
        <Typography>
                  {datajob.skills.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        mr: 1,
                        mb: 1,
                        backgroundColor: "#F0534A",
                        color: "#fff",
                        fontSize: 12,
                        height: 28,
                      }}
                    />
                  ))}
          </Typography>
      </Box>
    </Box>
  );
}

export default DetailPage