// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './display.css'
import { IoReturnDownBackOutline } from "react-icons/io5";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AiOutlineMuted, AiOutlineSound } from "react-icons/ai";


function Displayfive() {

  const [mute, setMute] = useState(true);
  const videoRef = useRef(null); // Reference to the video element

  const toggleMute = () => {
    setMute(!mute);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Toggle the video mute state
    }
  };

  return (
    <div className="display3" style={{backgroundImage:'url(./works/albg.avif)', color:'gray'}}>

      <div className="dispara" data-aos="fade-right">
        <p className='disheading'>AL BURDA AWARDS</p>
        <marquee  direction="" scrollamount="10" scrolldelay="50"
         className='dismarq'>-AWARDS-CULTURE-HERITAGE-POETRY-CALLIGRAPHY- ARTS-</marquee>
        <p className='disarab'>موز ماري</p>
        <p className='disdes'>
        Ministry of Culture, we acknowledge the significance of Islamic arts in enhancing the richness and diversity of our cultural legacy. We see Al Burda Award as an opportunity to honour our culture bearers and celebrate their dedication to preserving Islamic heritage. This Award brings forth different representations of art and culture transcending geographical and cultural boundaries. Through this Award, we seek to support and advance traditional Islamic arts while seamlessly integrating them into contemporary artistic forms</p>
        <br />
        <table>
          <tbody>
            <tr>
              <td>WORK:</td>
              <td className='ctd'>AL BURDA AWARDS</td>
              <td className='disarab'>البردة
              </td>
            </tr>
            <tr>
              <td>DATE:</td>
              <td className='ctd'>13/06/24</td>
              <td className='disarab'>١٣/٠٦/٢٤</td>
            </tr>
            <tr>
              <td>CAMERA:</td>
              <td className='ctd'>BMPCC 4K</td>
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
                  <Link to={'/s1'}>
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
        <source src="/works/alburda.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>

        {/* <div className="challenge">
          FOR THIS WORK MY CHALLENGE WAS TO Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque earum consequatur sunt debitis sit deserunt in voluptatem nulla asperiores et blanditiis, est vero. Nulla possimus laudantium nesciunt sed nobis.
        </div> */}
        </div>

  )
}

export default Displayfive