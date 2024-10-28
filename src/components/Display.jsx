// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import './display.css';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";

function Display() {
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
      <div className="display" style={{backgroundImage:'url(./works/NBHD.webp)',color:'antiquewhite'}}>
        <div className="dispara">
          <p className='disheading'>THE NEIGHBORHOOD</p>
          <marquee behavior="" direction="" scrollamount="10" scrolldelay="50" className='dismarq'>
            -CAFE-BAR-WHOLESOME-COCKTAILS-NATURAL WINES-YAS CREATIVE HUB-
          </marquee>
          <p className='disarab'>ن ح ب د</p>
          <p className='disdes'>
            Neighborhood Café & Bar is an inviting concept located in the Yas Creative Hub. We prioritize good wholesome food sourced locally and prepared with passion matched with carefully crafted drinks, from expertly brewed coffees to craft beer & cocktails and natural wines.
          </p>
          <br />
          <table >
            <tbody>
              <tr>
                <td>WORK:</td>
                <td className='ctd'>THE NEIGHBORHOOD</td>
                <td className='disarab'>ن ح ب د</td>
              </tr>
              <tr>
                <td>DATE:</td>
                <td className='ctd'>22/10/24</td>
                <td className='disarab'>١٤/١١/٢٠٢٣</td>
              </tr>
              <tr>
                <td>CAMERA:</td>
                <td className='ctd'>SONY A7IV</td>
                <td className='disarab'>A54  سوني</td>
              </tr>
              <tr>
                <td id='do'>
                  <Link to={'/works'} ><IoReturnDownBackOutline /></Link>
                </td>
                <td className='ctd' onClick={toggleMute}>
                  {mute ?<AiOutlineSound />: <AiOutlineMuted /> }
                </td>
                <td className='disarab'>
                  <Link to={'/lr'}>
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
            <source src="/works/NBHDv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default Display;
