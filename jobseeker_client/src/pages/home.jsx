import React, { useEffect, useState } from 'react';
import Jobs from '../pages/jobs.jsx';
import Banner from '../components/banner';
import Cards from '../components/cards.jsx';
import Sidebar from '../sidebar/sidebar.jsx';
import NewsLetter from '../components/newsLetter.jsx';


function Home() {
    const [selectedCategories, setSelectedCategories] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [query, setQuery] = useState("");

    useEffect(() => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_SERVER_URL}/all-jobs`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setIsLoading(false);
            });
    }, []);

    const handleInputChange = (event) => setQuery(event.target.value);
    const handleChange = (event) => setSelectedCategories(event.target.value);
    const handleClick = (event) => setSelectedCategories(event.target.value);

    const filterItems = jobs.filter(job => job.jobTitle?.toLowerCase().includes(query.toLowerCase()));

    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(filterItems.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const filterData = (jobs, selected, query) => {
        let filteredJobs = jobs;

        if (query) {
            filteredJobs = filterItems;
        }

        if (selected) {
            filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) =>
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase() ||
                experienceLevel.toLowerCase() === selected.toLowerCase() ||
                postingDate >= selected
            );
        }

        const { startIndex, endIndex } = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex);

        return filteredJobs.map((data, i) => <Cards key={i} data={data} />);
    };

    const result = filterData(jobs, selectedCategories, query);

    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange} />
            
            <div className='bg-slate-100 flex flex-col md:grid md:grid-cols-4 gap-6 lg:px-24 py-12 px-4'>
                <div className='bg-white p-4 rounded shadow-md'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick} />
                </div>
                
                <div className='col-span-2 bg-white p-4 rounded shadow-md'>
                    {isLoading ? (
                        <p className='font-medium'>Loading...</p>
                    ) : result.length > 0 ? (
                        <Jobs result={result} />
                    ) : (
                        <>
                            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
                            <p>No Data Found</p>
                        </>
                    )}

                    {result.length > 0 && (
                        <div className='flex justify-center mt-4 space-x-4'>
                            <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline cursor-pointer disabled:opacity-50'>
                                Previous
                            </button>
                            <span className='mx-2'>Page {currentPage} of {Math.ceil(filterItems.length / itemsPerPage)}</span>
                            <button onClick={nextPage} disabled={currentPage === Math.ceil(filterItems.length / itemsPerPage)} className='hover:underline cursor-pointer disabled:opacity-50'>
                                Next
                            </button>
                        </div>
                    )}
                </div>
                
                <div className='bg-white p-4 rounded shadow-md'>
                    <NewsLetter />
                </div>
            </div>
        </div>
    );
}

export default Home;

