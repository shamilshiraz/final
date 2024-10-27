// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Bts.css'

function BTS() {
  return (
    <div className='btsmain'>
        <video autoPlay muted loop className='btsvid'>
            <source src='./BTS/bts1.mp4' type='video/mp4' />
             this shit is not working

        </video>  
          <video autoPlay muted loop className='btsvid'>
            <source src='./BTS/bts3.mp4' type='video/mp4' />
             this shit is not working

        </video>  
        <video autoPlay muted loop className='btsvid' >
            <source src='./BTS/bts2.mp4'  type='video/mp4' />
             this shit is not working

        </video>
        {/* <video autoPlay muted loop className='vid7' style={{height:'600px'}}>
            <source src='./poyil.mp4' type='video/mp4' />
             this shit is not working

        </video> */}
    </div>
  )
}


export default BTS