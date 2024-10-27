// eslint-disable-next-line no-unused-vars
import React from 'react'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Texting from '../components/Texting';
import { IoReturnDownBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Displayworks() {
    // const currentDate = new Date();
    // const day = String(currentDate.getDate()).padStart(2, '0');
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0');

  return (
    <div>
                                        <div className="intronav" data-aos="fade-up">
                                        <p><Link to={'/'}><IoReturnDownBackOutline />Back home</Link></p>
                                        <section className="animation">
                            <div className="first"><div>Thameem</div></div>
                            <div className="second"><div>Cinematographer</div></div>
                            <div className="third"><div>Filmmaker</div></div>
                          </section>
                          <p>أبو ظبي</p>
                        </div>

        <Works/>
        <Texting/>
        <Contact/>
    </div>
  )
}

export default Displayworks