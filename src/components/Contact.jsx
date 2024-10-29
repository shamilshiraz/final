import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="contact" id='contact'>
        <div className="video-background-container">
          <video className="video-background" autoPlay loop muted>
            <source src="/jjais.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="contact-content">
          <h3>Contact</h3>
          Have some interesting projects you want to collaborate?
          <br />Just send me an <a href="mailto:thameeeeem2002@gmail.com">Email</a>.
          <p>Connect to my socials</p>
          <span>
            <a href="https://www.instagram.com/thameeeeem?igsh=MXQ1a3N1OWY0ZzJ3MQ==">INST</a> <a href="https://wa.me/971543303244">WA</a>
          </span><br /></div></div></>
  );}
export default Contact;
