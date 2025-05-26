import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          EMMIT
        </div>
        <ul style={{ color: "white" }}>
          <Link to="/hackathons">Hackathons</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>
        </ul>
        <div className='Login-btn'>
          <Link to="/exploreevents">Events</Link>
          <Link to="/dashboard">Profile</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
