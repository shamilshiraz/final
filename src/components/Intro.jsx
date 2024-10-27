// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './Intro.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Texting from './Texting';


function Intro() {

    useEffect(() => {
        AOS.init();
      }, []);


    const currentDate = new Date();

    // Get the day and month
    const day = String(currentDate.getDate()).padStart(2, '0'); // Pad single digits with zero
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed




  return (
    <div className="rmain" id='intro'>
      <Texting/>
          <p className='aboutme' data-aos="fade-up"><img src="./cover.JPG" height={'150px'} alt="" />A dedicated videographer with roots in Kerala, now based in the UAE. My passion lies in capturing compelling stories through the lens, drawing inspiration from my love for movies and the art of framing every moment with precision and creativity.</p>

  </div>

 )
}

export default Intro



{/* <main className="introcontainer">
<div className="intc1">


<div className="intropara" data-aos="fade-right"
data-aos-delay="200">Hello, I'm Thameem</div>
</div>
<div className="intc2">
    {/* <marquee behavior="" direction="">
        <p style={{fontSize:'14px'}}>videos-photos-movie-life-friends-shit-cameras</p>
    </marquee> */}
{/* <p className='introdes' data-aos="fade-left">My name is Thameem, a dedicated videographer with roots in Kerala, now based in the UAE. My passion lies in capturing compelling stories through the lens, drawing inspiration from my love for movies and the art of framing every moment with precision and creativity.</p>
</div>
</main> */} 