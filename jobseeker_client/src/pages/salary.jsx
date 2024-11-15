import React, {useState,useEffect} from 'react'
import Pageheader from '../components/pageheader'
const salary = () => {
    const [searchText,setSearchText]=useState("")
    const [salary,setSalary]=useState([]);
    
    useEffect(()=>{
        fetch("salary.json").then(res=> res.json()).then(data=>setSalary(data))
    },[setSearchText])

    const handleSearch=()=>{
            const filter =salary.filter((job)=>job.title.toLowerCase().indexOf(searchText.toLowerCase())!==-1
        
        );
        console.log(filter)
        
        setSalary(filter)
    }
    //console.log(searchText)

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <Pageheader title={"Estimate Salary"} path={"salary"}/>
    <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
            <input type="text" name="search " id='search' onChange={(e)=>setSearchText(e.target.value)} className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full ' />
            <button onClick={handleSearch} className='bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4'>Salary</button>

        </div>

    </div>
    {/**Salary display card */}
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
        {
            salary.map((data)=>(
                <div key={data.id} className='shadow px-4 py-8 '>
                    <h4 className='font-semibold text-xl'>{data.title}</h4>
                    <p className='my-2 font-medium text-blue text-lg'>{data.salary}</p>
                    <div className='flex flex-wrap gap-4'>
                        <a href="/" className='underline'>{data.status}</a>
                        <a href="/" className='underline'>{data.skills}</a>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
    </>
  )
}

export default salary
