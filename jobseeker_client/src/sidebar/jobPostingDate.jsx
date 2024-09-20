import React from 'react'
import InputField from '../components/inputField'
const jobPostingDate = ({handleChange}) => {
    const now=new Date();
    //console.log(now)
    const ago24=new Date(now-24*60*60*1000)
    //console.log(ago24)
    const ago7=new Date(now-7*24*60*60*1000)
    //console.log(ago7)
    const ago30=new Date(now-30*24*60*60*1000)

    //convert date to string
    const ago24Date=ago24.toISOString().slice(0,10);
    const ago7Date=ago7.toISOString().slice(0,10);
    const ago30Date=ago30.toISOString().slice(0,10);
    console.log(ago30Date)

  return (
    <div>
       <div>
            <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'></span>All Time
                </label>
                

                <InputField handleChange={handleChange} value={ago24Date} title="Last 24 hours" name="test" />

                <InputField handleChange={handleChange} value={ago7Date} title="Last 7 days " name="test" />
                <InputField handleChange={handleChange} value={ago30Date} title="Last Moth" name="test" />
            </div>
        </div>
    </div>
  )
}

export default jobPostingDate
