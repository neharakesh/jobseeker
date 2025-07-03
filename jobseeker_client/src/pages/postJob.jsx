import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";


const PostJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        data.skills = selectedOption ? selectedOption.map(option => option.label) : []; // Only labels needed

        fetch(`${process.env.REACT_APP_SERVER_URL}/post-job`, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
})
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            if(result.acknowledged===true){
                alert("Job posted sucessfully")
            }
            reset()
        })
        .catch((error) => {
            console.error("Error submitting the job:", error);
        });
    };

    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" }
    ];

    console.log(watch("JobTitle")); // Replace "example" with actual field name if debugging

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
            {/* Form */}
            <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* 1st Row */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job Title</label>
                            <input type="text" defaultValue="Web Developer" {...register("JobTitle")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Company Name</label>
                            <input type="text" placeholder="Ex: Microsoft" {...register("CompanyName")} className="create-job-input" />
                        </div>
                    </div>

                    {/* 2nd Row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Minimum Price</label>
                            <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Maximum Price</label>
                            <input type="text" placeholder="$80k" {...register("maxPrice")} className="create-job-input" />
                        </div>
                    </div>

                    {/* 3rd Row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Salary Type</label>
                            <select {...register("salaryType")} className="create-job-input">
                                <option value="">Choose Your Salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job Location</label>
                            <input type="text" placeholder="Seattle" {...register("jobLocation")} className="create-job-input" />
                        </div>
                    </div>

                    {/* 4th Row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Job Posting Date</label>
                            <input type="date" {...register("postingDate")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Experience Level</label>
                            <select {...register("experienceLevel")} className="create-job-input">
                                <option value="">Choose Your Experience</option>
                                <option value="Internship">Internship</option>
                                <option value="NoExperience">No experience</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>

                    {/* 5th Row */}
                    <div>
                        <label className="block mb-2 text-lg">Required Skill Sets:</label>
                        <CreatableSelect 
                            defaultValue={selectedOption} 
                            onChange={setSelectedOption} 
                            options={options} 
                            isMulti 
                            className="create-job-input py-4" 
                        />
                    </div>

                    {/* 6th Row */}
                    <div className="create-job-flex">
                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Company Logo</label>
                            <input type="url" placeholder="Paste your company logo URL: https://example.com" {...register("companyLogo")} className="create-job-input" />
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <label className="block mb-2 text-lg">Employment Type</label>
                            <select {...register("employmentType")} className="create-job-input">
                                <option value="">Choose Your Employment Type</option>
                                <option value="Internship">Internship</option>
                                <option value="Full-time">Full-Time</option>
                                <option value="Part-time">Part-Time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>

                    {/* 7th Row */}
                    <div className="w-full">
                        <label>Job Description</label>
                        <textarea 
                            className="w-full pl-3 py-1.5 focus:outline-none" 
                            rows={6} 
                            placeholder="Job Description" 
                            {...register("description")} 
                        />
                    </div>

                    {/* Last Row */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg">Job Posted By</label>
                        <input type="email" placeholder="Your email" {...register("postedBy")} className="create-job-input" />
                    </div>

                    <input type="submit" className='my-5 clock mt-12 bg-blue text-white px-8 py-2 rounded-sm cursor-pointer' />

                </form>
            </div>
        </div>
    );
};

export default PostJob;
