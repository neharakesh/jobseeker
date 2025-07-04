import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useLoaderData, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const UpdateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const {
    _id, JobTitle, CompanyName, minPrice, maxPrice, salaryType,
    jobLocation, postingDate, experienceLevel, companyLogo,
    employmentType, description, postedBy, skills
  } = useLoaderData();

  const onSubmit = (data) => {
    data.skills = selectedOption
      ? selectedOption.map(option => option.label)
      : (skills || []); // fallback to old if not reselected

    fetch(`${import.meta.env.Vite_SERVER_URL}/update-job/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0 || result.acknowledged) {
          toast.success("Job updated successfully!");
          reset();
          navigate('/my-jobs');
        } else {
          toast.error("Update failed! Try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting the job:", error);
        toast.error("Something went wrong!");
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" }
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Form fields unchanged... */}
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input type="text" defaultValue={JobTitle} {...register("JobTitle")} className="create-job-input" />
            </div>

            {/* Repeat other fields like in your current code with defaultValue={...} */}
            {/* Skill Set */}
            <div>
              <label className="block mb-2 text-lg">Required Skill Sets:</label>
              <CreatableSelect
                defaultValue={skills?.map(skill => ({ label: skill, value: skill }))}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className="create-job-input py-4"
              />
            </div>

            {/* Final Submit */}
            <input
              type="submit"
              name="Update"
              className='my-5 clock mt-12 bg-blue text-white px-8 py-2 rounded-sm cursor-pointer'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateJob;
