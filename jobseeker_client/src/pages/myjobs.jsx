import React, { useEffect, useState } from 'react'

const myjobs = () => {
  const email="neharajpoot2@gmail.com"
  const [jobs,setJobs]=useState([])
  const [searchText,setSearchText]=useState('')
  const [isLoading,setIsLoading]=useState(true)


  useEffect(()=>{
    setIsLoading(true)
    fetch()
  })
  return (
    <>
    
    </>
  )
}

export default myjobs


