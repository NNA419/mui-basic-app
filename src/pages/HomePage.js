import React, { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import jobsData from "../data.json";

function HomePage() {

  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = jobsData.jobs

        console.log(jobs);
        setJobs(response);
        // console.log(jobList1);
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  },[])
  
  console.log("render jobs:" ,jobs);

  return (
    <JobList jobs={jobs} />
  )
}


export default HomePage