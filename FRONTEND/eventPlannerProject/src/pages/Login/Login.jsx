// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider
} from '../../firebase';

import { signInWithPopup } from 'firebase/auth'; 


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setPopup('Please enter a valid email!');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPopup('Password must be at least 8 characters long, include one letter, one number, and one special character!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/api/LoginData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setPopup('');
        navigate('/dashboard');
      } else {
        setPopup(data.message || 'Login failed');
      }
    } catch (error) {
      setPopup('Error during login: ' + error.message);
    }
  };

  const handleOAuthLogin = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('OAuth user:', user);
      setPopup('');
      navigate('/dashboard');
    } catch (error) {
      console.error('OAuth login error:', error);
      setPopup('OAuth login failed: ' + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left" />
      <div className="login-right">
        <div className="login-content">
          <h1>Hello!</h1>
          <h2>Welcome Back</h2>
          <h3>Please Login to your Account</h3>

          <div className="email-password">
            <div className="login-email">
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-pswd">
              <h3>Password</h3>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="forgot-pswd">
            <p>
              New User? <Link to="/signup">Signup</Link>
            </p>
            <p>Forgot Password?</p>
          </div>

          <button onClick={handleLogin}>Login</button>

          {popup && <div className="popup">{popup}</div>}

          <div className="linebreak">
            <div className="line"></div>
            Or
            <div className="line"></div>
          </div>

          <div className="google-face-twit">
            <div className="google-signup" onClick={() => handleOAuthLogin(googleProvider)}>
              Sign up with Google
            </div>
            <div className="facebook-signup" onClick={() => handleOAuthLogin(facebookProvider)}>
              <img src="/images/facebook.png" alt="Facebook" />
            </div>
            <div className="twitter-signup" onClick={() => handleOAuthLogin(twitterProvider)}>
              <img src="/images/twitter.png" alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
