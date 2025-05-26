import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleGetStarted = () => {
    if (email.trim() !== "") {
      navigate("/register");
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // popup disappears after 3 seconds
    }
  };

  return (
    <main className="hero">
      <div className="waveline">
        <motion.img 
          animate={{ scale: [1, 1.1, 1], rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 100,
            ease: "linear"
          }}
          src="./images/waveline-2.png" 
          alt="" 
        />
      </div>

      <div className="hero-content">
        <h2>Event Management made Intuitive and Thorough</h2>
        <p>
          With intuitive features such as guest list management and event
          scheduling, you can streamline your event plan
        </p>
        {/* <div className="getstart-btn">
          <input 
            type="text" 
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleGetStarted}>Get Started →</button>
        </div> */}
      </div>

      <div className="setting">
        <motion.img 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear"
          }}
          src="./images/desktop-1.png" 
          alt="" 
        />
      </div> 

      {showPopup && (
        <div style={popupStyle}>
          Please enter your email first!
        </div>
      )}
    </main>
  );
};

// simple inline popup style
const popupStyle = {
  position: "fixed",
  top: "20px",
  right: "20px",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: "8px",
  fontSize: "16px",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  zIndex: 999,
};

export default Hero;
