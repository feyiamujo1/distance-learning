import React from 'react'
import Logo from '../../assets/images/logo.png'

function Navbar() {
  return (
    <nav className='absolute w-full px-3.5 lg:px-6 py-2 top-0 bg-white flex items-center shadow-nav-shadow z-10'>
        <span>
          <img className='h-14 lg:h-16 cursor-pointer' src={Logo} alt='Logo'/>
        </span>
    </nav>
  )
}

export default Navbar