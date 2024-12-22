import React, { useState } from 'react'
import Logo from '../../public/images/logo.png'
import { NavLink,Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function Navbar() {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const handleMenuToggler=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems=[
        {path:"/",title:"Start a search"},
        {path:"/my-jobs",title:"My Jobs"},
        {path:"/salary",title:"Salary Estimate"},
        {path:"/post-Job",title:"Post a job"},
        

    ]
    return (
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <div className='flex items-center gap-2' >
                <img className='h-20 w-20 mt-3 flex' src={Logo} alt="sara pagl hai" />
                <a href='/' className=''><span className='font-bold text-2xl text-primary'>JobSeeker</span></a>
                </div>
                {/*Nav items*/}
                <ul className='hidden md:flex gap-12'>
                    {
                        navItems.map(({path,title})=>(
                            <li key={path} className='text-base text-primary'>
                                <NavLink to={path} className={({isActive})=>
                                isActive ? "active" : ""
                                }>
                                    {title}

                                </NavLink>
                            </li>
                        ))
}
                </ul>
                {/*sign up and login button */}
                <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    <Link to="/login" className='py-2 px-5 border rounded '>Login</Link>
                    <Link to="/signup" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</Link>
                </div>

                {/*mobile menu */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler }>
                        {
                            isMenuOpen? <ImCross className='w-5 h-5 text-primary ' />: <FaBars className='w-5 h-5 text-primary '/>
                        }
                       
                    </button>
                </div>
            </nav>

            {/*nav items for mobile */}
            <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen?"":"hidden"} items-center md:hidden`}>
                <ul>
                {
                        navItems.map(({path,title})=>(
                            <li key={path} className='text-base text-white first:text-white py-1'>
                                <NavLink to={path} className={({isActive})=>
                                isActive ? "active" : ""
                                }>
                                    {title}

                                </NavLink>
                            </li>
                        ))}
                        <li className='text-white py-1'><Link to="/login" >Login</Link></li>
                        <li className='text-white py-1'><Link to="/signup" >Sign up</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar
