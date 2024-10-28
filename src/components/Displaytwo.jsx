// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './display.css'
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";


function Displaytwo() {

  const [mute, setMute] = useState(true);
  const videoRef = useRef(null); // Reference to the video element

  const toggleMute = () => {
    setMute(!mute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the video mute state
    }
  };

  return (
    <div className="display2" style={{backgroundImage:'url(./works/mm-min.webp)'}}>

      <div className="dispara" data-aos="fade-right">
        <p className='disheading'>MOUZ MARI</p>
        <marquee  direction="" scrollamount="10" scrolldelay="50"
         className='dismarq'>-CAFE-BAR-WHOLESOME-COCKTAILS-NATURAL WINES-YAS CREATIVE HUB-</marquee>
        <p className='disarab'>موز ماري</p>
        <p className='disdes'>MouzMari is a unique Argentinian-Emirati steakhouse located on Al Reem Island in Abu Dhabi. This restaurant is known for its fusion of Argentinean and Emirati cuisines, offering a delightful blend of flavors that are both unexpected and delicious. The ambiance is a mix of industrial and minimal décor, featuring brick walls, black iron bars, and Emirati-style domed arches.</p>
        <br />
        <table>
          <tbody>
            <tr>
              <td>WORK:</td>
              <td className='ctd'>MOUZ MARI</td>
              <td className='disarab'>موز ماري</td>
            </tr>
            <tr>
              <td>DATE:</td>
              <td className='ctd'>22/10/24</td>
              <td className='disarab'>٢٢/١٠/٢٠٢٤</td>
            </tr>
            <tr>
              <td>CAMERA:</td>
              <td className='ctd'>RED COMODO</td>
              <td className='disarab'>A54  سوني
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
                  <Link to={'/zeina'}>
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
        className="disvideo"
        // controls // Allows play/pause and other controls
        autoPlay={true} // Optionally auto-play the video
        muted={false} // Optionally start muted
        loop={true}
        ref={videoRef}  // Optionally loop the video
      >
        <source src="/works/mouzmari.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        {/* <div className="challenge">
          FOR THIS WORK MY CHALLENGE WAS TO Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque earum consequatur sunt debitis sit deserunt in voluptatem nulla asperiores et blanditiis, est vero. Nulla possimus laudantium nesciunt sed nobis.
        </div> */}
        </div>

  )
}

export default Displaytwo