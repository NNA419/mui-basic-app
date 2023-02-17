import { Box, Container, Grid, Pagination } from '@mui/material';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from './JobCard';

function JobList({ jobs }) {
    const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  
  let [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search");

  console.log(jobs);

  const newJobList = jobs.filter((e) => {
    if (e.title.toLowerCase().includes(`${search}`)) {
      return e;
    }
  });

  const totalPages = newJobList.length ? Math.ceil((newJobList.length) / 5)
  : Math.ceil((jobs.length) / 5);


  const handlerPageChange = (event, value) => {
     setCurrentPage(value);
     setLimit(5);
 };

return (
  <Container sx={{ mt: "50px" }}>
    <Grid container spacing={3}>
      {newJobList.length
        ? newJobList &&
          newJobList
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((data) => <JobCard data={data} key={data.id} />)
        : jobs.length &&
          jobs
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((data) => <JobCard data={data} key={data.id} />)}

      {/* {data.length &&
        data
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((data) => <JobCard data={data} key={data.id} />)} */}
    </Grid>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
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