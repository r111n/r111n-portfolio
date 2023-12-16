import React from 'react'
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center h-[100px] sticky top-0'>
        <span className='text-blue-600 font-poppins'>R111N</span>
        <ul className='hidden sm:flex gap-x-10 font-lato text-slate-700'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <ul className='flex sm:hidden'>
            <IoMenu className='text-2xl'/>
        </ul>
    </nav>
  )
}

export default Navbar