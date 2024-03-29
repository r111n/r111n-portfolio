import React, { useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa"
import Banner from "../assets/b-2.png"
import IconReact from "../assets/react.png"
import IconNode from "../assets/node.png"
import IconMongo from "../assets/mongo.png"
import IconEx from "../assets/express.png"
import RevealAni from './animation/RevealAni'



const Hero = () => {

  const clickFb = () => {
    window.location.href = "https://www.facebook.com/sonanthony.estomagulang.9"
  }
  const clickIg = () => {
    window.location.href = "https://www.instagram.com/sincerelyton/"
  }
  const clickGh = () => {
    window.location.href = "https://github.com/r111n"
  }

  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-2 font-lato items-center h-full overflow-hidden'>
        <div className='text-center md:text-start flex items-center justify-center mt-0 sm:-mt-28'>
           <div className='space-y-2 flex items-center lg:items-start flex-col justify-center'>
            <RevealAni>
                   <div>
                        <h5 className=' text-center lg:text-start'>Get to know me</h5>
                          <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-6xl xl:text-7xl'>Hi, I'm <strong className=' text-blue-600'>Son Anthony</strong></h1>
                   </div>
            </RevealAni>
            <RevealAni>
                    <p>I'm a third year computer science student. I love learning new techs.</p>
            </RevealAni>
            <RevealAni>
                    <div className='flex gap-5 text-4xl text-slate-800 justify-center md:justify-start'>
                        <FaFacebookF onClick={clickFb} className='p-2 bg-blue-100 duration-300 hover:bg-blue-200 rounded-xl hover:cursor-pointer' />
                        <FaInstagram onClick={clickIg} className='p-2 bg-blue-100 duration-300 hover:bg-blue-200 rounded-xl hover:cursor-pointer' />
                        <FaGithub onClick={clickGh} className='p-2 bg-blue-100 duration-300 hover:bg-blue-200 rounded-xl hover:cursor-pointer' />
                    </div>
              </RevealAni>
           </div>
        </div>
        <div className='hidden lg:block'>
            <img src={Banner} />
                <div className='hidden xl:block'>
                <img src={IconReact} className='absolute top-[15rem] right-36 -z-10 w-[200px]' />
                <img src={IconNode} className='absolute top-16 right-[26rem] -z-10 w-[150px]' />
                <img src={IconMongo} className='absolute top-[20rem] right-[28rem] w-[150px]' />
                <img src={IconEx} className='absolute bottom-6 right-24 w-[150px]' />
           </div>
                
        </div>
    </div>
    </>
  )
}

export default Hero