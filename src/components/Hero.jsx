// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Hero.css'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import BTS from './BTS'
import Funny from './Funny'
import Texting from './Texting'


function Hero() {

  const [time,setTime]=useState('')
  const heroName="Moحd Thameem"

  useEffect(()=>{
    function updateTime(){
      const now= new Date();
  
      const gmtPlus4=new Date(now.getTime()+(4*60*60*1000))
  
      const hours=gmtPlus4.getUTCHours().toString().padStart(2,'0')
      const mins=gmtPlus4.getUTCMinutes().toString().padStart(2,'0')
  
      setTime(`${hours}:${mins}`)
  
     }
     updateTime()

     const intervalId = setInterval(updateTime, 60000);

     return () => clearInterval(intervalId);


  })


useEffect(()=>{
  gsap.to('.thmhero',{
    y:0,
    stagger:0.05,
    delay:0,
    duration:0.1,
    scrollTrigger: {
      trigger: ".heroname",   // Element to trigger the animation
      start: "top 80%",       // Animation starts when top of .heroname reaches 80% of the viewport height
      toggleActions: "play none none reverse" // Play the animation on scroll in, reverse it on scroll out
    }
  })

  gsap.to('.heroname',{
    y:0,
    stagger:0.05,
    delay:0,
    duration:0.1,
    scrollTrigger: {
      trigger: ".thmheroC", // Element to trigger the animation
      start: "top 80%",     // Start when the hero image is in view
      toggleActions: "play none none reverse"
    }  
  })
},[])
const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
   



  return (
    <div className="herocont" id='hero' style={{backgroundImage:'url(/coverbg.webp)'}}>
            <nav>
        <div className="nav">
          <div className="n1">
            <p id='smDs'>Name</p>
            <p>MOHAMMED THAMEEM</p>
            <p>GMT+4 (<span style={{color:'red'}}>{time}</span>),AE</p>
          </div>
          <div className="n1">
          <p id='smDs'>Status</p>
          <p>CURRENTLY WORKING</p>
            <p>LOUD STUDIOS,AE</p>
          </div>
          <div className="n1">
          <p id='smDs'>Sitemap</p>
          <p style={{color:'grey'}}>INDEX<Link to={'/works'} id='links'> WORKS</Link></p>
           <br />
          <Link to={'/archives'} id='links'>ARCHIVES</Link><Link to={'/contactpage'} id='links'> CONTACT</Link>
          </div>
          <div className="n1">
            <p id='smDs'>Let's connect</p>
            <p><a href="https://www.instagram.com/thameeeeem?igsh=MXQ1a3N1OWY0ZzJ3MQ==" id='links'>INST</a> <a href="https://wa.me/971543303244" id='links'>WA</a></p>
            <p><a href="mailto:thameeeeem2002@gmail.com" id='links'>EMAIL</a></p>
          </div>
        </div>
        
      </nav>
    <div className="heromain container h-100vh w-100vw ">

      <div className="up2">
        <p id='index'>//INDEX</p>
        <p>أبو ظبي</p>
      </div>
      <div className="herobody">
        <div className="thmheroC">
        <img src='./cover.png' className='thmhero' alt="" />
        </div>
        <div className="heronameC">        <p className="heroname">         
          {heroName}     </p>        </div>
        <p className='herofootnote'>-Filmmaker / videographer /creative director / Photographer-</p>
      </div>
      {/* <div className="intronav" data-aos="fade-up">
                          <p>{`${day}/${month}`}</p>
                          <section className="animation">
                            <div className="first"><div>Thameem</div></div>
                            <div className="second"><div>Cinematographer</div></div>
                            <div className="third"><div>Filmmaker</div></div>
                          </section>
                          <p>أبو ظبي</p>
                        </div> */}
      <p className='aboutme' data-aos="fade-up" style={{marginBlock:'40vh'}}><img src="./them.jpg" height={'150px'} alt="" />A dedicated videographer with roots in Kerala, now based in the UAE. My passion lies in capturing compelling stories through the lens, drawing inspiration from my love for movies and the art of framing every moment with precision and creativity.</p>

      {/* <BTS/>
      <Texting/>
      <Funny/> */}

    </div>
    </div>


  )
}

export default Hero