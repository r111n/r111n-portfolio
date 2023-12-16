import React from 'react'
import { BiLogoMongodb,BiLogoReact,BiLogoNodejs,BiLogoTailwindCss,BiLogoJava } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import { IoIosArrowRoundForward } from "react-icons/io"

const Hero = () => {
  return (
    <>
    <div className='h-[100vh] font-lato grid grid-cols-1 sm:grid-cols-2'>
        <div className='order-2 sm:order-1 place-self-start sm:place-self-center place-items-center justify-items-center'>
            <h1 className='text-4xl sm:text-center'>Hi! I'm <strong className='font-poppins text-blue-700'>Son Anthony Estomagulang</strong></h1>
            <h3 className='text-md italic -mt-1'>a fullstack developer</h3>
            <div className='flex items-center gap-3 text-blue-500 mt-2'>
                {/* <span><IoIosArrowRoundForward className='text-3xl'/></span> */}
                <span className='font-poppins text-slate-800 font-bold'>Tech Stack</span>
                <div className='flex text-xl'>
                    <BiLogoMongodb />
                    <SiExpress />
                    <BiLogoReact />
                    <BiLogoNodejs />
                    <BiLogoTailwindCss />
                    <BiLogoJava />
                </div>
            </div>
        </div>
        <div className='bg-slate-500 order-1 sm:order-2'>
            
        </div>
    </div>
    </>
  )
}

export default Hero