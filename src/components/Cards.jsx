import React from 'react'
import { CiMonitor, CiMobile1, CiGrid31 } from "react-icons/ci"

const Cards = () => {
  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 h-full'>
            <div className='p-4 bg-slate-100 rounded-md min-h-[400px] shadow-sm space-y-4'>
                <CiMonitor className='text-7xl text-slate-700' />
                <div>
                    <h4 className='text-lg text-slate-700'>Web Development</h4>
                    <p className='text-sm text-slate-600'>I Started creating static website on grade 10</p>
                </div>
            </div>
            <div className='p-4 bg-slate-100 rounded-md  min-h-[400px] shadow-sm space-y-5'>
                <CiMobile1 className='text-7xl text-slate-700' />
               <div>
                    <h4 className='text-lg text-slate-700'>Web Development</h4>
                    <p className='text-sm text-slate-600'>I Started creating static website on grade 10</p>
               </div>
            </div>
            <div className='p-4 bg-slate-100 rounded-md  min-h-[400px] shadow-sm space-y-5'>
                <CiGrid31 className='text-7xl text-slate-700' />
                <div>
                    <h4 className='text-lg text-slate-700'>Web Development</h4>
                    <p className='text-sm text-slate-600'>I Started creating static website on grade 10</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards