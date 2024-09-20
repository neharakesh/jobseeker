import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'

const newsLetter = () => {
  return (
    <>
    <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText/>
        Email me for Jobs</h3>
        <p className='text-primary/75 text-base mb-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit, voluptatem sint exercitationem, numquam, eos ipsam quidem magnam optio nam id cumque a nulla! Itaque rerum expedita neque perferendis.</p>
        <div className='w-full space-y-4'>
            <input type='email' name="email" placeholder='Name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
            <input type='submit' value={"subscribe"} className='w-full bg-blue rounded-sm text-white cursor-pointer block py-2 pl-3 border focus:outline-none font-semibold'/>
        </div>
        
    </div>

    <div className='mt-7'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaRocket/>
        Get noticed Faster</h3>
        <p className='text-primary/75 text-base mb-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt voluptatibus impedit, voluptatem sint exercitationem, numquam, eos ipsam quidem magnam optio nam id cumque a nulla! Itaque rerum expedita neque perferendis.</p>
        <div className='w-full space-y-4'>
            <input type='email' name="email" placeholder='Name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none'/>
            <input type='submit' value={"subscribe"} className='w-full bg-blue rounded-sm text-white cursor-pointer block py-2 pl-3 border focus:outline-none font-semibold'/>
        </div>
        
    </div>
    </>
  )
}

export default newsLetter
