import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MyField from '../components/MyField'
import Projects from '../components/Projects'
import Foooter from '../components/Foooter'

const Homepage = () => {
  return (
    <>
    <div className='p-2'>
      <Navbar />
    </div>
    <div className='h-[85vh] lg:h-[90vh] py-2 px-4 '>
        <Hero />
    </div>
    <MyField />
    <Projects />
    <Foooter />
    </>
  )
}

export default Homepage