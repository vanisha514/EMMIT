import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
            EMMIT
            {/* <img src="./logo/emmit-logo.png" alt="" className='emmit-logo'/>
            <img src="./logo/emmit-name.png" alt="" className='emmit-name'/> */}
        </div>
        <ul>
            <Link to='/explorehackathons'><li>Hackathons</li></Link>
            <Link to='/'><li>About</li></Link>
            <Link to='/Blogs'><li>Blogs</li></Link>
        </ul>
        <div className='Loginsignup-btn'>
        <Link to= '/login'><button className='login-btn'>Login</button></Link>
        <Link to = '/signup'><button className='signup-btn'>Register</button></Link>
        </div>
        
      </nav>
    </div>
  )
}

export default Navigation
