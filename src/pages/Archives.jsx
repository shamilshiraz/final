// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Horizontal from '../components/Horizontal'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'
import { IoReturnDownBackOutline } from "react-icons/io5";
import Tabhor from '../components/Tabhor';


function Archives() {

  const[isTab,setIsTab]=useState(window.innerWidth>768 && window.innerWidth<1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])





  return (
    <>   <div>
                              {isTab?(
                          <Tabhor/>
                        ):        <Horizontal/>
}
        <Contact/>
    </div>
    <div></div>
    </>
 
  )
}

export default Archives