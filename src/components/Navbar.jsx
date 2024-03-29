import React from 'react'
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  return (
   <header className='w-full'>
      <nav className='flex justify-around bg-slate-300 shadow-sm p-4 rounded-2xl bg-opacity-25 backdrop-blur-md backdrop-filter border border-opacity-18 '>
          <span className='text-blue-600 font-poppins text-xl'>R111N</span>
          <ul className='hidden sm:flex gap-x-10 font-poppins text-sm text-slate-800'>
              <li>Home</li>
              <li>Skills</li>
              <li>Projects</li>
          </ul>
          <ul className='flex sm:hidden'>
              <IoMenu className='text-2xl'/>
          </ul>
        </nav>
   </header>
  )
}

export default Navbar