import React, { useEffect, useRef, useState } from 'react'
import './Horizontal.css'
import Chinatown from './Chinatown'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoReturnDownBackOutline } from "react-icons/io5";



function Mobilehor() {

    const targetsec=useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetsec,
      });

      const x= useTransform(scrollYProgress, [0,1], ['1%','-500%'])

      const[isMobile,setIsMobile]=useState(window.innerWidth<768)

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      },[])
  

  return (
    <section ref={targetsec} className='holderworks' id='archives'>



        <div className="holder2works">
        <div className="video-background-container">
          <video className="video-background" autoPlay loop muted>
            <source src="/archives/china.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
            <motion.div style={{x}} className="holder3">
              <p className='workh1'>//ARCHIVES</p>
              <Chinatown src='/archives/china.mp4'/>
              <Chinatown src='/archives/kodai.mp4'/>
              <Chinatown src='/archives/payyolipooram.mp4'/>
              <Chinatown src='/archives/mumbai.mp4'/>
              <Chinatown src='/archives/newspaper.mp4'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Mobilehor