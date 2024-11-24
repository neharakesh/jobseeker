import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
const jobdetails = () => {
    const {id}=useParams();
    const [job,setJob]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8000/all-jobs/${id}`)
        .then(res=>res.json())
        .then(data=>setJob(data))
    },[])
    const handleApply=async()=>{
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }
    
  return (

    <div className='max-screen-2xl container mx-auto xl:px-24 px-4'>
      <h3>jobdetails:{id}</h3>
      <h1>{job.JobTitle}</h1>
      <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default jobdetails
