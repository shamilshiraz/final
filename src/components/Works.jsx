// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './Works.css'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
// import { IoReturnDownBackOutline } from "react-icons/io5";



function Works() {

    const[currentImage,setCurrentImage]=useState('/works/NBHD.webp');

    const audioref=useRef(null)


    const works = [
        { id: 1, title: "The NBHD", image: "/works/NBHD.webp", crew: "nbhd", camera: "Sony A54" },
        { id: 2, title: "Leadrights Automotive", image: "/works/lr.webp", crew: "lr", camera: "Camera 2" },
        { id: 3, title: "Mouz Mari", image: "/works/mm-min.webp", crew: "mouzmari", camera: "Camera 3" },
        { id: 4, title: "LOCAL", image: "/works/local.webp", crew: "zeina", camera: "Camera 4" },
        { id: 5, title: "Redmi 13", image: "/works/redmi.png", crew: "redmi", camera: "Camera 5" },
        { id: 6, title: "Alburda Awards", image: "/works/ALBURDA.webp", crew: "alburda", camera: "Camera 6" },
        { id: 7, title: "Surour Jolaire", image: "/works/s1.png", crew: "s1", camera: "Camera 7" },
        { id: 8, title: "Google AI CIRCLE", image: "/works/ai.webp", crew: "ai", camera: "Camera 7" }

        // Add more works here...
    ];

    const onHover=()=>{
        if(audioref.current){
            audioref.current.currentTime=0;
            audioref.current.play(); 
        }
    }

     const handleMouseEnter = (image) => {
        setCurrentImage(image); // Change image on hover
        onHover(); // Play sound on hover
    };

  return (
    <div className="works">
<div className="workmain" id='works'>
    <audio ref={audioref} src='/mouseclickaudio.mp3'/>
    <div className="worksub">
        
    {works.map((work, index) => (
                    <Link 
                        to={`/${work.crew}`}
                        className="worklidiv" 
                        key={work.id}
                        onMouseEnter={() => handleMouseEnter(work.image)}
                    >
                        <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p> {/* 01, 02 format */}
                        <p>{work.title.toUpperCase()}</p>
                        {/* <p>{work.camera}</p> */}
                        <GoArrowUpRight style={{fontSize:'25px'}}/>
                        
                    </Link>
                ))}
    </div>
    <div >
                <img src={currentImage} alt="Current Work" className='workcover' />
                <br />
                {/* <Scene src={currentImage} className="image-display"/> */}
    </div>

</div>
</div>
  )
}

export default Works