import { Box, Container, Grid, Pagination } from '@mui/material';
import React, { useState } from 'react';
import JobCard from './JobCard';

function JobList({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const totalPages = Math.ceil((data.length) / 5);

 const handlerPageChange = (event, value) => {
     setCurrentPage(value);
     setLimit(5);
 };

return (
  <Container sx={{ mt: "50px" }}>
    <Grid container spacing={3}>
      {data &&
        data
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((data) => <JobCard data={data} key={data.id} />)}
    </Grid>
    <Box sx={{display:"flex", justifyContent:"center"}}>
      <Pagination
        onChange={handlerPageChange}
        sx={{ mt: "50px" }}
        count={totalPages}
        page={currentPage}
      />
    </Box>
  </Container>
);
}

export default JobList