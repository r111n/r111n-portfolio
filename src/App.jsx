import { useState } from 'react'
import Homepage from './layout/Homepage'
import { motion } from 'framer-motion'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 4000)
  return (
    <>
      {isLoading ? (<Loader />) : (
        <div className='box-border m-0 p-0'>
        <Homepage />
        </div>
      )}
    </>
  )
}

export default App
