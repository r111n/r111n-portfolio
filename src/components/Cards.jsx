import React from 'react'
import { CiMonitor, CiMobile1, CiGrid31 } from "react-icons/ci"
import RevealAni from './animation/RevealAni'

const Cards = () => {
  return (
    <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 h-full'>
            <div className='p-4 bg-slate-100 rounded-md shadow-sm space-y-4 border-2 flex flex-col md:items-start items-center hover:scale-105 duration-300'>
                <CiMonitor className='text-7xl text-slate-700' />
                <RevealAni>
                <div>    
                    <h4 className='text-lg text-slate-700'>Web Development</h4>
                    <p className='text-sm text-slate-600'>I can create static and fullstack web applications</p>
                </div>
                </RevealAni>
            </div>      
            <div className='p-4 bg-slate-100 rounded-md shadow-sm space-y-5 border-2 flex flex-col md:items-start items-center hover:scale-105 duration-300'>
                <CiMobile1 className='text-7xl text-slate-700' />
                <RevealAni>
               <div>
                    <h4 className='text-lg text-slate-700'>Mobile Development</h4>
                    <p className='text-sm text-slate-600'>I can also develop fullstack mobile applications</p>
               </div>
               </RevealAni>
            </div>     
            <div className='p-4 bg-slate-100 rounded-md shadow-sm space-y-5 border-2 flex flex-col md:items-start items-center hover:scale-105 duration-300'>
                <CiGrid31 className='text-7xl text-slate-700' />
                <RevealAni>
                <div>
                    <h4 className='text-lg text-slate-700'>Layouting</h4>
                    <p className='text-sm text-slate-600'>I am currently the Layout artist of The NORSUnian</p>
                </div>
                </RevealAni>
            </div>
        </div>
    </>
  )
}

export default Cards