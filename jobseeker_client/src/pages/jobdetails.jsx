import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "Portfolio URL",
      inputPlaceholder: "Enter your portfolio or LinkedIn URL",
    });
    if (url) {
      Swal.fire(`You have submitted: ${url}`);
    }
  };

  return (
    <div className="container mx-auto max-w-screen-lg px-6 py-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-xl p-8 shadow-lg mb-10">
        <h1 className="text-4xl font-bold mb-4 text-black">{job.JobTitle || "Loading..."}</h1>
        <p className="text-xl mb-6 text-black">{job.CompanyName || "Company Name"}</p>
        <div className="flex flex-wrap items-center space-x-4">
          <span className="bg-white text-blue font-medium rounded-full px-4 py-2 text-sm shadow">
            {job.jobLocation || "Location Unavailable"}
          </span>
          <span className="bg-white text-blue font-medium rounded-full px-4 py-2 text-sm shadow">
            Salary: {job.minPrice && job.maxPrice ? `${job.minPrice} - ${job.maxPrice}` : "Negotiable"}
          </span>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Job Description */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {job.description ||
              "The job description provides an overview of the responsibilities, required qualifications, and the working environment. It helps applicants understand what the job entails."}
          </p>

          {/* Key Responsibilities */}
          <h3 className="text-xl font-medium mb-2">Key Responsibilities:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {job.responsibilities
              ? job.responsibilities.map((item, index) => <li key={index}>{item}</li>)
              : ["Manage team projects effectively", "Collaborate with other teams", "Deliver high-quality solutions"]}
          </ul>

          {/* Requirements */}
          <h3 className="text-xl font-medium mt-6 mb-2">Requirements:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {job.requirements
              ? job.requirements.map((item, index) => <li key={index}>{item}</li>)
              : ["Bachelor's degree in relevant field", "2+ years of experience", "Strong problem-solving skills"]}
          </ul>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">About the Company</h2>
          <p className="text-gray-700 leading-relaxed">
            {job.companyDescription ||
              "This section highlights the company's culture, mission, and what sets it apart from competitors. It helps candidates get a better understanding of the workplace."}
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Industry:</h3>
            <p className="text-gray-600">{job.industry || "Technology"}</p>

            <h3 className="text-lg font-medium mt-4 mb-2">Website:</h3>
            <a
              href={job.companyWebsite || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {job.companyWebsite || "www.companywebsite.com"}
            </a>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-12 text-center">
        <button
          onClick={handleApply}
          className="bg-blue text-white font-semibold text-lg px-10 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;

