import React from 'react'
import InputField from '../components/inputField'
const workExpirence = ({handleChange}) => {
  return (
    <>
    <div>
            <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField handleChange={handleChange} value="Any experience" title="Any experience" name="test" />

                <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test" />

                <InputField handleChange={handleChange} value="Intership" title="Intership" name="test" />
                
            </div>
        </div>
    </>
  )
}

export default workExpirence