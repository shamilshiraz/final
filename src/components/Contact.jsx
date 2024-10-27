import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      {/* Contact section with video background */}
      <div className="contact" id='contact'>
        {/* Video background */}
        <div className="video-background-container">
          <video className="video-background" autoPlay loop muted>
            <source src="/jjais.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Contact content */}
        <div className="contact-content">
          <h3>Contact</h3>
          Have some interesting projects you want to collaborate?
          <br />Just send me an <a href="mailto:shamilshiraz0@gmail.com">Email</a>.
          <p>Connect to my socials</p>
          <span>
            <a href="#">INST</a> <a href="#">YT</a>
          </span>
          <br />
          {/* <img height={'400px'} src="./payyoli.jpg" alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
