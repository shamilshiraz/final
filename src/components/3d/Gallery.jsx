/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';



function Gallery() {

 const about=useRef(null);
 const {scrollYProgress}=useScroll({
    target: about,
 })

 const x=useTransform(scrollYProgress,[0,1],['0%','-0%'])



  return (
    <section className="holder" ref={about}>

    <div className="holder2">

        
    <motion.div style={{x}} className='gallerymain'>
<div className="gal">
<div className="galley">
            <video autoPlay muted loop className='vid1' >
            <source src='./beach1.mp4' type='video/mp4' />
             this shit is not working

        </video>
            <video autoPlay muted loop className='vid2' >
            <source src='./shesaid.mp4' type='video/mp4' />
             this shit is not working
        </video>      
            <video autoPlay muted loop className='vid3' >
            <source src='./mumbai.mp4' type='video/mp4' />
             this shit is not working

        </video>
            <video autoPlay muted loop className='vid4' >
            <source src='./beach2.mp4' type='video/mp4' />
             this shit is not working

        </video>     
            <video autoPlay muted loop className='vid5' >
            <source src='./first.mp4' type='video/mp4' />
             this shit is not working

        </video>
            <video autoPlay muted loop className='vid6' >
            <source src='./chaya.mp4' type='video/mp4' />
             this shit is not working

        </video>
            <video autoPlay muted loop className='vid5' >
            <source src='./beach3.mp4' type='video/mp4' />
             this shit is not working

        </video>
            <video autoPlay muted loop className='vid7' >
            <source src='./kodai.mp4' type='video/mp4' />
             this shit is not working

        </video>
       
        </div>
</div> 
    </motion.div>
        </div>
    </section>

  )
}

export default Gallery