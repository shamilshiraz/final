import './Loading.css'
import React, { useEffect, useState } from 'react'


function Loading({fadeOut}) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const duration = 10000;
    const intervalTime = 50; // Update every 50ms
    const step = 100 / (duration / intervalTime); // Calculate step increment
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval); // Clear the interval when it reaches 100
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className={`video-loader ${fadeOut ? 'fade-up' : ''}`}>
        <video autoPlay muted loop >
            <source src='./loading.mp4' type='video/mp4'/>
             this shit is not working
        </video>
        <p className='loadtext'> {Math.floor(loadingPercentage)}%</p>
        

    </div>
  )
}

export default Loading