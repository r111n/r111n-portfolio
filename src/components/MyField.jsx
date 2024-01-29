import React from 'react'
import Cards from './Cards'

const MyField = () => {
  return (
    <>
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='font-poppins  space-y-4'>
                <h2 className='font-poppins text-xl text-slate-700 text-center'>I Specialize In</h2>
                <Cards />
            </div>
        </div>
    </>
  )
}

export default MyField