import React from 'react'
import Location from './location.jsx'
import Salary from './salary.jsx'
import WorkExpirence from './workExpirence.jsx'
import JobPostingDate from './jobPostingDate.jsx'
function Sidebar({handleChange,handleClick}) {
    return (
        <div className='space-y-5'>
            <h3 className='text-lg font-bold mb-2'>Filters</h3>
            <Location handleChange={handleChange}/>
            <Salary handleChange={handleChange} handleClick={handleClick} />
            <JobPostingDate handleChange={handleChange}/>
            <WorkExpirence handleChange={handleChange}/>
        </div>
    )
}

export default Sidebar
