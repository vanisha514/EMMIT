import React from 'react'
import { Link } from 'react-router-dom'

const Navigation3 = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
            EMMIT
            {/* <img src="./logo/emmit-logo.png" alt="" className='emmit-logo'/>
            <img src="./logo/emmit-name.png" alt="" className='emmit-name'/> */}
        </div>
        <div className='Loginsignup-btn'>
        <Link to= '/login'><button className='login-btn'>Login</button></Link>
        <Link to = '/signup'><button className='signup-btn'>Register</button></Link>
        </div>
        
      </nav>
    </div>
  )
}

export default Navigation3
