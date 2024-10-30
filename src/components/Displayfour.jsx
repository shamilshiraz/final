// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import './display.css';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";

function Displayfour() {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null); // Reference to the video element

  const toggleMute = () => {
    setMute(!mute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the video mute state
    }
  };

  return (
    <>
      <div className="display" style={{backgroundImage:'url(./works/redmitry.webp)',color:'antiquewhite',backgroundColor:'black'}}>
        <div className="dispara">
          <p className='disheading'>REDMI 13</p>
          <marquee behavior="" direction="" scrollamount="10" scrolldelay="50" className='dismarq'>
            -XIAOMI-REDMI13-CAMERA-GAMING-NEX GEN-
          </marquee>
          <p className='disarab'>ن ح ب د</p>
          <p className='disdes'>
          The Redmi 13 is Xiaomi's latest offering, featuring a 6.79-inch FHD+ display with a 120Hz adaptive refresh rate, ideal for gaming and multimedia experiences.
          </p>
          <br />
          <table>
            <tbody>
              <tr>
                <td>WORK:</td>
                <td className='ctd'>REDMI 13</td>
                <td className='disarab'>ريدمي</td>
              </tr>
              <tr>
                <td>DATE:</td>
                <td className='ctd'>07/05/24</td>
                <td className='disarab'>٠٧/٠٥/٢٤</td>
              </tr>
              <tr>
                <td>CAMERA:</td>
                <td className='ctd'>BMPCC 6K PRO</td>
                <td className='disarab'>A54  سوني</td>
              </tr>
              <tr>
                <td>
                  <Link to={'/works'}><IoReturnDownBackOutline /></Link>
                </td>
                <td className='ctd' onClick={toggleMute}>
                  {mute ?<AiOutlineSound />: <AiOutlineMuted /> }
                </td>
                <td className='disarab'>
                  <Link to={'/alburda'}>
                    <TbPlayerTrackNextFilled />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dis">
          <video
          preload="auto"
            className="disvideo"
            autoPlay
            muted={!mute} // Dynamically start with mute based on the state
            loop
            ref={videoRef} // Reference to the video element
          >
            <source src="/works/redmi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default Displayfour;
