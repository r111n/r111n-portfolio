import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
const RevealAni = ({children}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()
    const slideControls = useAnimation()
    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
        console.log(isInView)
    }, [isInView])
  return (
    <div ref={ref} className='relative w-fit overflow-hidden'>
        <motion.div variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.7, delay: 0.30}}
        >{children}</motion.div>
        <motion.div 
        variants={{
            hidden: {left: 0},
            visible: { left: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            backgroundColor: "#4ade80", 
            zIndex: 20,
        }}
        >

        </motion.div>
    </div>
  )
}

export default RevealAni