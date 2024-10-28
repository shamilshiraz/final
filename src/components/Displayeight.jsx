// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './display.css'
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";


function Displayeight() {

  const [mute, setMute] = useState(true);
  const videoRef = useRef(null); // Reference to the video element

  const toggleMute = () => {
    setMute(!mute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the video mute state
    }
  };

  return (
    <div className="display3" style={{backgroundImage:'url(/works/aibg.webp)',color:'white'}}>

      <div className="dispara" data-aos="fade-right">
        <p className='disheading'>AI CIRCLE</p>
        <marquee  direction="" scrollamount="10" scrolldelay="50"
         className='dismarq'>-AI-GOOGLE-CIRCLE-TECH-INTERACTIVE AI-WEB-</marquee>
        <p className='disarab'>دائرة جوجل </p>
        <p className='disdes'>
        Google's Circle AI is a conversational AI model designed to enable natural, context-aware interactions. It leverages advanced language understanding to deliver human-like responses in various applications, enhancing user experiences through AI-driven conversations.</p>
        <table>
          <tbody>
            <tr>
              <td>WORK:</td>
              <td className='ctd'>AI CIRCLE</td>
              <td className='disarab'> دائرة جوجل</td>
            </tr>
            <tr>
              <td>DATE:</td>
              <td className='ctd'>14/07/2024</td>
              <td className='disarab'>١٤/٠٧/٢٤</td>
            </tr>
            <tr>
              <td>CAMERA:</td>
              <td className='ctd'>SONY A7IV</td>
              <td className='disarab'>A7IV  سوني
                 </td>
            </tr>
            <tr>
            <td>
                  <Link to={'/works'}><IoReturnDownBackOutline /></Link>
                </td>
                <td className='ctd' onClick={toggleMute}>
                {mute ?<AiOutlineSound />: <AiOutlineMuted /> }
                </td>
                <td className='disarab'>
                  <Link to={'/nbhd'}>
                    <TbPlayerTrackNextFilled />
                  </Link>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

        <div className="dis" data-aos="fade-left">
        <video
        preload="auto"
        className="disvideo2"
        // controls // Allows play/pause and other controls
        autoPlay={true} // Optionally auto-play the video
        muted={false} // Optionally start muted
        loop={true}
        ref={videoRef}  // Optionally loop the video
      >
        <source src="/works/aicircle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        {/* <div className="challenge">
          FOR THIS WORK MY CHALLENGE WAS TO Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque earum consequatur sunt debitis sit deserunt in voluptatem nulla asperiores et blanditiis, est vero. Nulla possimus laudantium nesciunt sed nobis.
        </div> */}
        </div>

  )
}

export default Displayeight