import React from 'react'
import { IoMenu } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"

const Navbar = () => {
  return (
   <header className='w-full'>
      <nav className='flex justify-around bg-slate-200 shadow-sm p-4 rounded-2xl'>
          <span className='text-green-600 font-poppins text-xl'>R111N</span>
          <ul className='hidden sm:flex gap-x-10 font-poppins text-sm text-slate-800'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
          <ul className='flex sm:hidden'>
              <IoMenu className='text-2xl'/>
          </ul>
        </nav>
   </header>
  )
}

export default Navbar