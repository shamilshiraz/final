// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import './display.css';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";

function Displaysix() {
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
      <div className="display" style={{backgroundImage:'url(./works/surourbg.avif)',color:'grey'}}>
        <div className="dispara">
          <p className='disheading'>SUROUR JOLAIRE</p>
          <marquee behavior="" direction="" scrollamount="10" scrolldelay="50" className='dismarq'>
            -JEWELLERY-ANTIQUES-PRETTY-SUROUR-UNIQUE-
          </marquee>
          <p className='disarab'>سرور جلير  </p>
          <p className='disdes'>
          Surour Jolaire is a fine jewelry brand that was established in 2024, specializing in contemporary, elegant designs that draw inspiration from nature. The brand prides itself on creating high-quality pieces using 18k gold and VS natural diamonds, all of which are crafted in the UAE. Their jewelry is designed to capture the beauty found in natural forms, with collections like the Spiral Collection, which is inspired by the spirals seen in natural elements such as vines and storms.
</p>
          <br />
          <table>
            <tbody>
              <tr>
                <td>WORK:</td>
                <td className='ctd'>SUROUR JOLAIRE</td>
                <td className='disarab'>  سرور جلير</td>
              </tr>
              <tr>
                <td>DATE:</td>
                <td className='ctd'>19/3/24</td>
                <td className='disarab'>١٩/٠٣/٢٤</td>
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
                  <Link to={'/ai'}>
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
            <source src="/works/s1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default Displaysix;
