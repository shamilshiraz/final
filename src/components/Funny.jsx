// eslint-disable-next-line no-unused-vars
import React from 'react'
import './funny.css'

function Funny() {
  return (
    <div className='funnycont'>
        <video autoPlay muted loop className='v1' id='vv' >
            <source src='./funny/chaya.mp4' type='video/mp4' />
             this shit is not working

        </video>
        <video autoPlay muted loop className='v2' id='vv'  >
            <source src='./shesaid.mp4' type='video/mp4' />
             this shit is not working

        </video>
        <video autoPlay muted loop className='v3' id='vv'  >
            <source src='./NBHDv.mp4' type='video/mp4' />
             this shit is not working

        </video>
        <video autoPlay muted loop className='v4' id='vv'  >
            <source src='./funny/beach3.mp4' type='video/mp4' />
             this shit is not working

        </video>
        <video autoPlay muted loop className='v5' id='vv'  >
            <source src='./funny/funny1.mov' type='video/mp4' />
             this shit is not working

        </video>
        <video autoPlay muted loop className='v6' id='vv'  >
            <source src= './funny/funny2.mov'  type='video/mp4' />
             this shit is not working

        </video>
        <video autoPlay muted loop className='v7' id='vv' >
            <source src='./funny/beach1.mp4' type='video/mp4' />
             this shit is not working

        </video>

    </div>
  )
}

export default Funny