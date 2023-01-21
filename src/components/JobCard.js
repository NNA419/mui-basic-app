import {Divider, Chip, Grid, Paper, Typography, Box, Button } from '@mui/material';
import React from 'react'


function JobCard({ data }) {
  

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={12}
        sx={{
          minWidth: 275,
          minHeight: 300,
          position: "relative",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography noWrap>{data.title}</Typography>
        <Divider sx={{ backgroundColor: "red" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            flexWrap: "wrap",
          }}
        >
          {data.skills.slice(0, 4).map((skill) => (
            <Chip
              sx={{
                maxWidth: "100%",
                fontSize: 11,
                backgroundColor: "rgb(215, 71, 66)",
                color: "white",
              }}
              label={skill}
              variant="outlined"
            />
          ))}
        </Box>
        <Typography
          sx={{
            letterSpacing: 0.00939,
            fontSize: 14,
          }}
        >
          {data.description.length > 120
            ? `${data.description.slice(0, 120)}...`
            : data.description}
        </Typography>

        <Button
          sx={{
            position: "absolute",
            left: "25%",
            bottom: 12,
            backgroundColor: "#FFA726",
            color: "black",
            width: 130,
            padding: "4px 16px",
            display: "block",
            margin: "0 auto",
            mt: 5,
            ":hover": { backgroundColor: "rgb(245, 124, 0)" },
          }}
        >
          LEARN MORE
        </Button>
      </Paper>
    </Grid>
  );
}

export default JobCard