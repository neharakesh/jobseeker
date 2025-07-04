import React from 'react'
import InputField from '../components/inputField.jsx'

function Location({handleChange}) {
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Location</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField handleChange={handleChange} value="Banglore" title="Banglore" name="test" />

                <InputField handleChange={handleChange} value="Pune" title="Pune" name="test" />

                <InputField handleChange={handleChange} value="Mumbai" title="Mumbai" name="test" />
                <InputField handleChange={handleChange} value="Gurugram" title="Gurugram" name="test" />
            </div>
        </div>
    )
}

export default Location
