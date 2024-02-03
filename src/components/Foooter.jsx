import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"

const Foooter = () => {
    const clickFb = () => {
        window.location.href = "https://www.facebook.com/sonanthony.estomagulang.9"
      }
      const clickIg = () => {
        window.location.href = "https://www.instagram.com/sincerelyton/"
      }
      const clickGh = () => {
        window.location.href = "https://github.com/r111n"
      }
  return (
    <div className='h-[30vh] flex justify-center items-center flex-col border-t-2 gap-6'>
        <div className='flex gap-5 text-2xl text-slate-800 justify-center'>
            <FaFacebookF onClick={clickFb} className='hover:cursor-pointer' />
            <FaInstagram onClick={clickIg} className='hover:cursor-pointer' />
            <FaGithub onClick={clickGh} className='hover:cursor-pointer' />
        </div>
        <div>
        &copy; 2024 Son Anthony Estomagulang. All rights reserved.
        </div>
    </div>
  )
}

export default Foooter