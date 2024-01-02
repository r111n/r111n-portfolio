import React from 'react'
import { BiLogoMongodb,BiLogoReact,BiLogoNodejs,BiLogoTailwindCss,BiLogoJava } from "react-icons/bi"
import { SiExpress } from "react-icons/si"
import { IoIosArrowRoundForward } from "react-icons/io"
import Banner from '../assets/banner.jpg'

const Hero = () => {
  return (
    <>
    <div className='h-[85vh] font-lato grid grid-cols-1 sm:grid-cols-2'>
        <div className='order-2 sm:order-1 flex flex-col text-center sm:text-start items-center justify-start sm:justify-center'>
           <div className='px-4 space-y-1'>
            <h1 className='text-4xl'>Hi! I'm <strong className='font-poppins text-blue-700'>Son Anthony Estomagulang</strong></h1>
                <h3 className='text-md italic -mt-1'>a 3rd year fullstack developer</h3>
                <div className='flex items-center gap-x-3 text-blue-500 mt-0 sm:mt-2 justify-center sm:justify-start'>
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
        </div>
        <div className='hidden sm:grid grid-cols-2 order-1 sm:order-2 overflow-hidden gap-4 px-4'>
            <div className='col-span-2 bg-blue-500 rounded-xl'>

            </div>
            <div className='bg-blue-500 rounded-xl bg-[url("../assets/banner.jpg")] bg-cover'>

            </div>
            <div className='bg-blue-500 rounded-xl'>

            </div>
        </div>
    </div>
    </>
  )
}

export default Hero