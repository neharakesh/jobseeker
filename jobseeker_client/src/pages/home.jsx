import React, { useEffect } from 'react'
import Jobs from '../pages/jobs.jsx'
import Banner from '../components/banner'
import { useState } from 'react';
import Cards from '../components/cards.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
import NewsLetter from '../components/newsLetter.jsx';


function Home() {
    const[selectedCategories,setSelectedCategories]=useState(null)
    const [jobs,setJobs]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    const [currentPage,setCurrentPage]=useState(1)
    const itemsPerPage=6;

    useEffect(()=>{
        setIsLoading(true);
        fetch("http://localhost:8000/all-jobs").then(res=>res.json()).then((data)=>{//console.log(data)
            setJobs(data)
            setIsLoading(false)
        })
    },[])
    //handleinput change
    const [query,setquery]=useState("");
    const handleInputChange=(event) =>{
        setquery(event.target.value)
    }
    

    //filter jobs by title
    const filterItems = jobs.filter((job) => job.jobTitle?.toLowerCase().includes(query.toLowerCase()));

    //console.log(filterItems)

    //radio filtering
    const handleChange=(event) =>{
        setSelectedCategories(event.target.value)
    }

    //button based filtering
    const handleClick=(event)=>{
        selectedCategories(event.target.value)
    }

    //calculate the index range
    const calculatePageRange=()=>{
        const startIndex=(currentPage-1) * itemsPerPage;
        const endIndex=startIndex+itemsPerPage;
        return {startIndex,endIndex}
    }

    //function for next page
    const nextPage=()=>{
        if(currentPage<Math.ceil(filterItems.length/itemsPerPage))
            setCurrentPage(currentPage+1)
    }
    //function for previous page
    const prevPage=()=>{
        if(currentPage>1)
        {
            setCurrentPage(currentPage-1)
        }
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
            filterJobs=filterJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>
                
                
                (
                jobLocation.toLowerCase()===selected.toLowerCase() || parseInt(maxPrice)<= parseInt(selected) ||
                salaryType.toLowerCase()===selected.toLowerCase() ||
                employmentType.toLowerCase()===selected.toLowerCase() ||
                experienceLevel.toLowerCase()===selected.toLowerCase() ||
                postingDate >=selected

            ))
            //console.log(filterJobs)
        }


        //slice the data based on curent page
        const {startIndex,endIndex}=calculatePageRange()
        filterJobs=filterJobs.slice(startIndex,endIndex)
        return filterJobs.map((data,i)=> <Cards key={i} data={data} />)
    }

    const result=filterData(jobs,selectedCategories,query)

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>

        {/*main context */}
        <div className='bg-slate-100  flex md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
        {/*Left side */}
        <div className='bg-white p-4 rounded '><Sidebar handleChange={handleChange} handleClick={handleClick} /></div>
        {/*Job cards */}
        <div className='col-span-2 bg-white'>
            {
                isLoading?(<p className='font-medium'>Loading....</p>):result.length>0?(<Jobs result={result}/>):<>
                <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
                <p>No Data Found</p>
                </>
            }

            {/*Pagination  */}
            {
                result.length>0?(
                    <div className='flex justify-center mt-4 space-x-8 mb-4'>
                        <button onClick={prevPage} disabled={currentPage===1} className='hover:underline cursor-pointer'>Previous</button>
                        <span className='mx-2'>Page {currentPage} of {Math.ceil(filterItems.length/itemsPerPage)}</span>
                        <button onClick={nextPage} disabled={currentPage===Math.ceil(filterItems.length/itemsPerPage)} className='hover:underline'>Next</button>

                    </div>
                ):""
            }
                
            </div>
        <div className='bg-white p-4 rounded '><NewsLetter/></div>
        </div>
        </div>
            
        
    )
}

export default Home
