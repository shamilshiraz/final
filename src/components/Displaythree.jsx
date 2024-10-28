// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './display.css'
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";


function Displaythree() {

  const [mute, setMute] = useState(true);
  const videoRef = useRef(null); // Reference to the video element

  const toggleMute = () => {
    setMute(!mute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the video mute state
    }
  };

  return (
    <div className="display3" style={{backgroundImage:'url(/works/local.webp)'}}>

      <div className="dispara" data-aos="fade-right">
        <p className='disheading'>LOCAL AL ZEINA</p>
        <marquee  direction="" scrollamount="10" scrolldelay="50"
         className='dismarq'>-CAFE-SALOON-CLOTHING-FRESHNESS-COFFEE-</marquee>
        <p className='disarab'>موز ماري</p>
        <p className='disdes'>
        Local is a trendy barbershop and cafe that offers a unique blend of grooming services and specialty coffee under one roof. It’s a popular spot for those looking to enjoy both a high-quality haircut and a relaxing coffee in a stylish and comfortable environment.</p>        <br />
        <table>
          <tbody>
            <tr>
              <td>WORK:</td>
              <td className='ctd'>LOCAL</td>
              <td className='disarab'>لوكل </td>
            </tr>
            <tr>
              <td>DATE:</td>
              <td className='ctd'>21/8/24</td>
              <td className='disarab'>٢١/٨/٢٤</td>
            </tr>
            <tr>
              <td>CAMERA:</td>
              <td className='ctd'>BMPCC 6K PRO
              </td>
              <td className='disarab'>BMPCC 6K
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
                  <Link to={'/redmi'}>
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
        <source src="/works/zeina.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        {/* <div className="challenge">
          FOR THIS WORK MY CHALLENGE WAS TO Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque earum consequatur sunt debitis sit deserunt in voluptatem nulla asperiores et blanditiis, est vero. Nulla possimus laudantium nesciunt sed nobis.
        </div> */}
        </div>

  )
}

export default Displaythree