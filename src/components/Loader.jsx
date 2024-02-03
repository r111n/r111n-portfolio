import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners' 

const Loader = () => {
  return (
    <>
    <div className='w-full h-[100vh] flex items-center justify-center'>
    <ClimbingBoxLoader color="#3b82f6" size={20} />
    </div>
    </>
  )
}

export default Loader