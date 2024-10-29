import React from 'react'
import Contact from '../components/Contact'
import { Link } from 'react-router-dom'
import { IoReturnDownBackOutline } from 'react-icons/io5';
function Cntct() {
  return (
    <div>                      
        <p style={{marginTop:'50px',color:'gray',position:'relative'}} ><Link to={'/'}><IoReturnDownBackOutline /></Link></p>
<Contact/></div>
  )
}

export default Cntct