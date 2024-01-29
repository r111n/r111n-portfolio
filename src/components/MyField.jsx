import React from 'react'
import Cards from './Cards'

const MyField = () => {
  return (
    <>
        <div className='h-[100vh] flex justify-center items-center'>
            <div className='font-poppins text-left'>
                <h2>I Specialice In</h2>
                <Cards />
            </div>
        </div>
    </>
  )
}

export default MyField