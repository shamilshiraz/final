// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import './display.css';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";

function Displayseven() {
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
      <div className="display" style={{backgroundImage:'url(./works/lrbg.webp)',color:'white'}}>
        <div className="dispara">
          <p className='disheading'>LEADRIGHTS AUTOMOTIVE</p>
          <marquee behavior="" direction="" scrollamount="10" scrolldelay="50" className='dismarq'>
            -CARS-DETAILING-CERAMIC-PPF-PREMIUM WRAPPING-DETAILING-
          </marquee>
          <p className='disarab'>لدريتس</p>
          <p className='disdes'>
          Leadrights Automotive in Abu Dhabi provides specialized car detailing, vehicle wrapping, and window tinting services. Known for its quality work on luxury cars, particularly Tesla models, it offers premium services like ceramic coating and PPF (paint protection film).
          </p>
          <br />
          <table>
            <tbody>
              <tr>
                <td>WORK:</td>
                <td className='ctd'>LEADRIGHTS</td>
                <td className='disarab'>  لدريتس </td>
              </tr>
              <tr>
                <td>DATE:</td>
                <td className='ctd'>05/05/2024</td>
                <td className='disarab'>٠٥/٠٥/٢٤</td>
              </tr>
              <tr>
                <td>CAMERA:</td>
                <td className='ctd'>SONY FX3</td>
                <td className='disarab'>FX3  سوني</td>
              </tr>
              <tr>
                <td>
                  <Link to={'/works'}><IoReturnDownBackOutline /></Link>
                </td>
                <td className='ctd' onClick={toggleMute}>
                  {mute ?<AiOutlineSound />: <AiOutlineMuted /> }
                </td>
                <td className='disarab'>
                  <Link to={'/mouzmari'}>
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
            <source src="/works/leadrights.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default Displayseven;
