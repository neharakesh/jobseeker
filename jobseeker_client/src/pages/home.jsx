import React from 'react'
import Banner from '../components/banner'
import { useState } from 'react';

function Home() {
    const [query,setquery]=useState("");
    const handleInputChange=(event) =>{
        setquery(event.target.value)
    }
    console.log(query);
    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>
        </div>
    )
}

export default Home
