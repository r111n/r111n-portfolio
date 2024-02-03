import React from 'react'
import WebMockUp from "../assets/jjclear.png"
import RevealAni from './animation/RevealAni'

const Projects = () => {
  return (
    <>
    <div className='h-[100vh] flex flex-col justify-center items-center py-4 gap-4 mb-10'>
      <div className='mt-10'>
      <RevealAni>
            <h2 className='font-poppins font-bold text-2xl text-blue-500'>My Projects</h2>
      </RevealAni>
      </div>
            <div className='flex flex-col lg:flex-row items-center w-[90%] p-4 rounded-xl bg-indigo-100 bg-opacity-50 backdrop-blur-7.5
                backdrop-filter backdrop-shadow border border-opacity-18 shadow-md gap-10'>
                <div className='w-[70%] bg-slate-200 rounded-xl overflow-hidden'>
                    <img src={WebMockUp} className='rounded-xl hover:scale-105 duration-300' />
                </div>
                <div className='flex flex-col items-center lg:items-start gap-2'>
                    <div>
                        <h3 className='font-poppins text-center lg:text-start text-xl sm:text-2xl lg:text-4xl xl:text-5xl md:text-3xl font-bold text-blue-700'>JJFitZone Web Application</h3>
                        <h5 className='font-lato text-center md:text-start'>A system developed for our Software Engineering</h5>
                    </div>
                    <div className='w-[90%] text-center lg:text-start text-xs sm:text-sm'>
                        <p>JJFitZone, a web-based application, redefines fitness management and analytics. Users can effortlessly organize schedules,
                          track progress, and make informed decisions with its user-friendly interface and comprehensive analytics tools.
                        </p>
                    </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default Projects