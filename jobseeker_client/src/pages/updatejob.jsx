import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const updatejob = () => {
    const {id} =useParams()
    //console.log(id)
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jonLoaction,postingDate,expirenceLevel,companyLogo,employmentType,description,posredBy,skills}=useLoaderData()
  return (
    <div>
      
    </div>
  )
}

export default updatejob
