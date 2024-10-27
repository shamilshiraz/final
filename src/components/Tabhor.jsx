import React, { useRef } from 'react'
import './Horizontal.css'
import Chinatown from './Chinatown'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoReturnDownBackOutline } from "react-icons/io5";


function Tabhor() {


    const targetsec=useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetsec,
      });

      const x= useTransform(scrollYProgress, [0,1], ['1%','-128%'])
  

  return (
    <section ref={targetsec} className='holderworks' id='archives'>



        <div className="holder2works">
        <div className="video-background-container">
          <video className="video-background" autoPlay loop muted>
            <source src="/china.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
            <motion.div style={{x}} className="holder3">
            <p style={{marginTop:'50px',color:'gray',position:'fixed'}} ><Link to={'/'}><IoReturnDownBackOutline /></Link></p>
              <p className='workh1'>//ARCHIVES</p>
              <Chinatown src='china.mp4'/>
              <Chinatown src='kodai.mp4'/>
              <Chinatown src='payyolipooram.mp4'/>
              <Chinatown src='mumbai.mp4'/>
              <Chinatown src='newspaper.mp4'/>
            </motion.div>
        </div>
    </section>
  )
}

export default Tabhor