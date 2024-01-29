import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
   <>
       <div className='grid grid-cols-1 sm:grid-cols-2 p-4 h-[100vh] items-center'>
            <div className='flex justify-center items-center'>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}} className='w-[400px] h-[500px] bg-blue-500'></motion.div>
            </div>
            <div className='p-4'>
                <h3 className='font-poppins text-6xl sm:text-8xl text-center sm:text-start text-slate-800'>ABOUT ME</h3>
            </div>
       </div>
   </>
  )
}

export default About