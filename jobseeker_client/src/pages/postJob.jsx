import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"

const postJob = () => {
    const [selectedOption,setSelectedOption]=useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills=selectedOption
        console.log(data)
      }
    const options=[
        {value:"javaScript",label:"javascript"},
        {value:"C++",label:"C++"},
        {value:"HTML",label:"HTML"},
        {value:"CSS",label:"CSS"},
        {value:"React",label:"REACT"}
    ]
      console.log(watch("example")) // watch input value by passing the name of it
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/*form*/}
        <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16 '>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>

            {/**!st Row */}
        
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Title</label>
            <input type="text" defaultValue={"web Devloper"} {...register("JobTitle")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Company Name</label>
            <input type="text" placeholder='Ex:Microsoft' {...register("CompanyName")} className='create-job-input' />
            </div>
            </div>
            

            {/*2nd Row */}
            <div className='create-job-flex '>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Minium Price</label>
            <input type="text" placeholder='$20k' {...register("minPrice")} className='create-job-input' />
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Maximum Price</label>
            <input type="text" placeholder='$80k' {...register("maxPrice")} className='create-job-input' />
            </div>
            </div>

            {/*3rd row */}      
            <div className='create-job-flex '>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Salary Type</label>
            <select {...register("salaryType")} className='create-job-input'>
        <option value="">Choose Your Salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
            </div>

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Location</label>
            <input type="text" placeholder='seattel' {...register("jobLocation")} className='create-job-input' />
            </div>
            </div>      

            {/**4th row */}
            <div className='create-job-flex '>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Job Posting Date</label>
            <input type="date" placeholder='2024-10-8' {...register("postingDate")} className='create-job-input' />
            </div>
                

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Expirence Level</label>
            <select {...register("experienceLevel")} className='create-job-input'>
        <option value="">Choose Your Expirence</option>
        <option value="Internship">Internship</option>
        <option value="NoExpirence">No expirence</option>
        <option value="Work remotely">Work remotely</option>
      </select>
            </div>
            </div>

            {/**5th row */}
            <div>
                <label className='block mb-2 text-lg'>Required Skill Sets:</label>
                <CreatableSelect defaultValue={selectedOption} 
                onChange={setSelectedOption}
                options={options}
                isMulti
                className='create-job-input py-4' />
            </div>

            {/**6th row */}
            <div className='create-job-flex '>
            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Company Logo </label>
            <input type="url" placeholder='Paste YOur Company logo url:https://hii.com' {...register("companyLogo")} className='create-job-input' />
            </div>
                

            <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-lg'>Employement Type</label>
            <select {...register("employmentType")} className='create-job-input'>
        <option value="">Choose Your Employment Type</option>
        <option value="Internship">Internship</option>
        <option value="Full-time">Full Time</option>
        <option value="Part-time">Part Time</option>
        <option value="Temporary">Temporary</option>
      </select>
            </div>
            </div>

        {/**7th Row */}
        <div className='w-full '>
            <label >Job Description</label>
            <textarea className='w-full pl-3 py-1.5 focus:outline-none
            ' rows={6} 
            
            placeholder='Job Description' {...register("description")} />
        </div>

        {/**Last row */}
        <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Posted By</label>
            <input type="email" placeholder='your email' {...register("postedBy")} className='create-job-input' />
        </div>
        

      <input type="submit" className='my-5 clock mt-12 bg-blue text-white px-8 py-2 rounded-sm cursor-pointer' />
    </form>
            
        </div>
    </div>
    </>
  )
}

export default postJob
