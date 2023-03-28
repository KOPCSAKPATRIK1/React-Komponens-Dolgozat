import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><Link className="linkItem" to="/fooldal">Főoldal</Link></li>
        <li><Link className="linkItem" to="/tapasztalat">Szakmai tapasztalat</Link></li>
        <li><Link className="linkItem" to="/foglalas">Időpontfoglalás</Link></li>
      </ul>
    </div>
  )
}

export default Navbar