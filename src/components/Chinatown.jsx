import React from 'react'
import './Chinatown.css'

function Chinatown(props) {
  return (
    <div className='ct'>
<div className="topl">
  <div className="l1"></div>
  <div className="l2">
    <p>REC🔴</p>
    </div>
</div>
        <video autoPlay muted loop className='chinatown' >
            <source src={props.src} type='video/mp4' />
             this shit is not working

        </video> 
<div className="topl">
  <div className="l3"></div>
  <div className="l4"></div>
</div>

     </div>
  )
}

export default Chinatown