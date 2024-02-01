import { useState } from 'react'
import Homepage from './layout/Homepage'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <motion.div className='box-border m-0 p-0'>
        <Homepage />
      </motion.div>
    </>
  )
}

export default App
