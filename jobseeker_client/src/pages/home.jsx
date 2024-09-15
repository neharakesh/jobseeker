import React, { useEffect } from 'react'
import Jobs from '../pages/jobs.jsx'
import Banner from '../components/banner'
import { useState } from 'react';
import Cards from '../components/cards.jsx';

function Home() {
    const[selectedCategories,setSelectedCategories]=useState(null)
    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch("jobs.json").then(res=>res.json()).then(data=>{//console.log(data)
            setJobs(data)
        })
    },[])
    //handleinput change
    const [query,setquery]=useState("");
    const handleInputChange=(event) =>{
        setquery(event.target.value)
    }
    

    //filter jobs by title
    const filterItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!==-1)
    //console.log(filterItems)

    //radio filtering
    const handleChange=(event) =>{
        setSelectedCategories(event.target.value)
    }

    //button based filtering
    const handleClick=(event)=>{
        selectedCategories(event.target.value)
    }

    //main function
    const filterData=(jobs,selected,query)=>{
        let filterJobs=jobs;

        //filtering input items
        if(query){
            filterJobs=filterItems;

        }
        //categories filtering
        if(selected){
            filterJobs=filterJobs.filter(({jobLoaction,maxPrice,experienceLevel,salaryType,employmentType,PostingDate})=>(
                jobLoaction.toLowerCase()===selected.toLowerCase() || parseInt(maxPrice)<= parseInt(selected) ||
                salaryType.toLowerCase()===selected.toLowerCase() ||
                employmentType.toLowerCase()===selected.toLowerCase()

            ))
            console.log(filterJobs)
        }
        return filterJobs.map((data,i)=> <Cards key={i} data={data} />)
    }

    const result=filterData(jobs,selectedCategories,query)

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>

        {/*main context */}
        <div className='bg-slate-100  flex md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
        <div className='bg-white p-4 rounded '>left</div>
        <div className='col-span-2 bg-white'>
                <Jobs result={result}/>
            </div>
        <div className='bg-white p-4 rounded '>right</div>
        </div>
            
        </div>
    )
}

export default Home
