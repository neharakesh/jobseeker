import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dotenv from "dotenv";
dotenv.config();

const myjobs = () => {
  const email="neharajpoot2@gmail.com"
  const [jobs,setJobs]=useState([])
  const [searchText,setSearchText]=useState('')
  const [isLoading,setIsLoading]=useState(true)
  const [currentPage,setCurrentPage]=useState(1)
  const itemsPerPage=4;

  useEffect(()=>{
    setIsLoading(true)
    fetch(`${process.env.REACT_APP_SERVER_URL}/my-jobs/neharajpoot233@gmail.com`).then(res=>res.json()).then(data=>{
      setJobs(data)
      setIsLoading(false)
  })
  },[searchText])

  //pagination
  const indexOfLastItem=currentPage * itemsPerPage
  const indexOfFirstItem=indexOfLastItem - itemsPerPage;
  const currentJobs=jobs.slice(indexOfFirstItem,indexOfLastItem)

  //next page button &previous page button
  const nextPage=()=>{
    if(indexOfLastItem<jobs.length){
      setCurrentPage(currentPage+1)
    }
  }
  const prevPage =()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }


  const handleSearch=() =>{
    const filter =jobs.filter((job)=>job.Title.toLowerCase().indexOf(searchText.toLowerCase())!==-1)
    setJobs(filter)
    setIsLoading(false)
  }
  const handleDelete = (id) => {
    //console.log(id);
    fetch(`http://localhost:8000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Job Deleted Successfully");
          // Optional: update the jobs list after deletion
          setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
        } else {
          alert("Error in deletion");
        }
      })
      .catch((error) => console.error("Error:", error));
};

  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto xl:px-4'>
      <div className='my-jobs-container'>
        <h1 className='text-center'> ALL MY JOBS</h1>
      
      <div className='search-box p-2 text-center mb-2'>
      <input 
      onChange={(e)=>setSearchText(e.target.value)}
      type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' />
      <button className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>search</button>
    </div>
    </div>

    {/** Table */}
    <div
  className="relative flex flex-col md:w-8/12 mb-10 h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:ml-60">
  <table className="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
      <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p className="block font-sans text-sm antialiased  leading-none text-blue-gray-900 opacity-70 font-bold">
            NO.
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p className="block font-sans text-sm antialiased  leading-none text-blue-gray-900 opacity-70 font-bold">
            Company Name
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Title
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Salary
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Edit
          </p>
        </th>
        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Delete
          </p>
        </th>
      </tr>
    </thead>

    {
      isLoading ? (<div className='flex items-center justify-center h-20'>loading...</div>):(<tbody>
        {
          jobs.map((jobs,index)=>(
            <tr key={index} 
            className="even:bg-blue-gray-50/50">
              <td className="p-4">
            <p  className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {index+1}
            </p>
          </td>
          <td className="p-4">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              ${jobs.CompanyName}
            </p>
          </td>
          <td className="p-4">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              ${jobs.JobTitle}
            </p>
          </td>
          <td className="p-4">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              ${jobs.minPrice}-${jobs.maxPrice}
            </p>
          </td>
          <td className="p-4">
            <button><Link to={`/edit-job/${jobs._id}`}>Edit</Link></button>
          </td>
          <td className="p-4">
          <button onClick={()=>handleDelete(jobs._id)} className='bg-red-700 py-2 px-6 text-white rounded-sm'>Delete</button>
          </td>
        </tr>
  
        
          ))
        }
        
        
       
        
      </tbody>)
    }

    
  </table>
</div>

    {/**PAgination */}
    <div className='flex justify-center text-black space-x-8 bg-gray-950'>
        {
          currentPage>1 &&(
            <button className='hover:underline ' onClick={prevPage}>Previous</button>
          )
        }
        {
          indexOfLastItem<jobs.length && (
            <button onClick={nextPage} className='hover:underline'>Next</button>
          )
        }
    </div>
    </div>
    </>
  )
}

export default myjobs


