import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth'; 
import { auth, googleProvider } from '../../firebase'; 


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsAgreed: false,
  });
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validate the form
  const validateForm = () => {
    const { email, password, repeatPassword, termsAgreed } = formData;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      setPopupMessage('Please enter a valid email!');
      return false;
    }
    if (!passwordRegex.test(password)) {
      setPopupMessage('Password must be at least 8 characters, include one letter, one number, and one special character!');
      return false;
    }
    if (password !== repeatPassword) {
      setPopupMessage('Passwords do not match!');
      return false;
    }
    if (!termsAgreed) {
      setPopupMessage('You must agree to the Terms of Service!');
      return false;
    }
    setPopupMessage('');
    return true;
  };

  // Handle normal Signup (Email/Password)
  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5001/api/RegisterData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            repeatPassword: formData.repeatPassword,
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          navigate('/dashboard'); 
        } else {
          setPopupMessage(data.message || 'Registration failed');
        }
      } catch (error) {
        setPopupMessage('Error during registration: ' + error.message);
      }
    }
  };  

  // Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-Up successful: ", user);
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setPopupMessage('Error during Google Sign-Up: ' + error.message);
    }
  };

  return (
    <div className='signUpPage'>
      <div className="signup-left">
        <img src="./images/signup-image-4.png" alt="Signup" />
      </div>

      <div className="signup-right">
        <div className='signup-content'>
          <h1>Hello!</h1>
          <h2>We are glad to see you :)</h2>

          {/* Google, Facebook, Twitter Signup Buttons */}
          <div className="google-face-twit">
            <div className="google-signup" onClick={handleGoogleSignup}>
              Sign up with Google
            </div>
            <div className="facebook-signup">
              <img src="./images/facebook.png" alt="Facebook" />
            </div>
            <div className="twitter-signup">
              <img src="./images/twitter.png" alt="Twitter" />
            </div>
          </div>

          <div className="linebreak">
            <div className="line"></div>
            Or
            <div className="line"></div>
          </div>

          {/* Name and Email */}
          <div className="name-email">
            <div className="signup-name">
              <h3>Name</h3>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="signup-email">
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password and Repeat Password */}
          <div className="pswd-repeatpswd">
            <div className="signup-pswd">
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="signup-repeatpswd">
              <h3>Repeat Password</h3>
              <input
                type="password"
                name="repeatPassword"
                placeholder="Repeat password"
                value={formData.repeatPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="signup-policy">
            <input
              type="checkbox"
              name="termsAgreed"
              checked={formData.termsAgreed}
              onChange={handleChange}
            />
            <label htmlFor="policy-check">I agree to the Terms of Service and Privacy Policy</label>
          </div>

          {/* Error Popup */}
          {popupMessage && <div className="popup-error">{popupMessage}</div>}

          {/* Submit Signup Button */}
          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
