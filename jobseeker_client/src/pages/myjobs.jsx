import React, { useEffect, useState } from 'react'

const myjobs = () => {
  const email="neharajpoot2@gmail.com"
  const [jobs,setJobs]=useState([])
  const [searchText,setSearchText]=useState('')
  const [isLoading,setIsLoading]=useState(true)


  useEffect(()=>{
    setIsLoading(true)
    fetch(`http://localhost:8000/my-jobs/neharajpoot233@gmail.com`).then(res=>res.json()).then(data=>{
      setJobs(data)
  })
  },[])

  const handleSearch=() =>{
    const filter =jobs.filter((job)=>job.Title.toLowerCase().indexOf(searchText.toLowerCase())!==-1)
    setJobs(filter)
    setIsLoading(false)
  }
  
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
  class="relative flex flex-col md:w-8/12 mb-10 h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:ml-60">
  <table class="w-full text-left table-auto min-w-max">
    <thead>
      <tr>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p class="block font-sans text-sm antialiased  leading-none text-blue-gray-900 opacity-70 font-bold">
            Company Name
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Title
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50 ">
          <p class="block font-sans text-sm antialiased font-bold leading-none text-blue-gray-900 opacity-70">
            Salary
          </p>
        </th>
        <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            John Michael
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            200000
          </p>
        </td>
        <td class="p-4">
          <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
        </td>
      </tr>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Alexa Liras
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Developer
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            23/04/18
          </p>
        </td>
        <td class="p-4">
          <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
        </td>
      </tr>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Laurent Perrier
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Executive
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            19/09/17
          </p>
        </td>
        <td class="p-4">
          <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
        </td>
      </tr>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Michael Levi
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Developer
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            24/12/08
          </p>
        </td>
        <td class="p-4">
          <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
        </td>
      </tr>
      <tr class="even:bg-blue-gray-50/50">
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Richard Gran
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Manager
          </p>
        </td>
        <td class="p-4">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            04/10/21
          </p>
        </td>
        <td class="p-4">
          <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </>
  )
}

export default myjobs


