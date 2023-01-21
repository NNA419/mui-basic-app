import React from 'react';
import JobList from '../components/JobList';
import Data from '../jobs.json';


function HomePage() {
  return (
    <JobList data={Data} />
  )
}


export default HomePage