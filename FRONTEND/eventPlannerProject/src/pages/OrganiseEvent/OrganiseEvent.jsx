import React, { useState } from "react";
import "./OrganiseEvent.css";
import axios from 'axios'

const OrganiseEvent = () => {

  const [formData, setFormData] = useState({
    eventName: '',
      eventType: '',
      eventTheme1: '',
      eventTheme2: '',
      eventMode: '',
      eventDate: '',
      eventDescription: '',
      eventRules: '',
      eventHostName: '',
      eventHostEmail: '',
      eventRegistrationCost: '' ,
      link:''
    });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // JavaScript-side URL validation
    try {
      new URL(formData.link); // Throws if invalid
    } catch (err) {
      alert("Please enter a valid registration URL starting with http:// or https://");
      return;
    }
  
    try {
      await axios.post('http://localhost:5001/api/formData', formData);
      alert('Form submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to submit form');
    }
  };
  

  return (
    <>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          {/* name of the event  */}
          <div className="eventNamediv">
          <h4>Event Name</h4>
          <input type="text" name="eventName" placeholder="Name of the Event" value={formData.eventName} onChange={handleChange}/>
          </div>


          <div className="eventTypediv">
          <h4>Type</h4>
          <div className="eventTypedivinput">
            <label>
              <input
                type="radio"
                name="eventType"
                value="Technical Event"
                onChange={handleChange}
              />
              Technical Event
            </label>
            <label>
              <input
                type="radio"
                name="eventType"
                value="Hackathon"
                onChange={handleChange}
              />
                Hackathon
              </label>
            </div>
          </div>

            {/* <input type="text" name="eventType" placeholder="eventType" value={formData.eventType} onChange={handleChange} /> */}

            {/* theme of the event  */}
            <div className="eventThemediv">
            <h4>Theme</h4>
            <input type="text" name="eventTheme1" placeholder="Enter First stack"value={formData.eventTheme1} onChange={handleChange} />
            <input type="text" name="eventTheme2" placeholder="Enter second stack"value={formData.eventTheme2} onChange={handleChange} />
            {/* <input type="text" name="theme2" placeholder="Enter second stack" /> */}
            </div>

            {/* location  */}
            <div className="eventModediv">
            <h3>Mode Of Event</h3>
            <div className="radio-options">
              <label>
                <input type="radio" name="eventMode" value="Online" onChange={handleChange} /> Online
              </label>
              <label>
                <input type="radio" name="eventMode" value="Offline" onChange={handleChange} /> Offline
              </label>
            </div>
          </div>

            
            {/* <input type="text" name="eventMode" placeholder="eventMode" value={formData.eventMode} onChange={handleChange}/> */}

            {/* date  */}
            <div className="eventDatediv">
            <h3>Date</h3>
            <input type="date" name="eventDate" placeholder="eventDate" value={formData.eventDate} onChange={handleChange} />
            </div>
              

            {/* Description  */}
            <div className="eventDescriptiondiv">
            <h3>Description</h3>
            <input type="text" name="eventDescription" placeholder="Event Description" value={formData.eventDescription} onChange={handleChange} />
            </div>
              

            {/* Rules */}
            <div className="eventRulesdiv">

            <h3>Rules</h3>
            <input type="text" name="eventRules" placeholder="Rules for the Event" value={formData.eventRules} onChange={handleChange} />
            </div>

            {/* Host Name */}
            <div className="eventHostnamediv">

            <h3>Host Name</h3>
            <input type="text" name="eventHostName" placeholder="Enter the name of Event Host" value={formData.eventHostName} onChange={handleChange}/>
            </div>

            {/* Host Email */}
            <div className="eventHostemaildiv">

            <h3>Email</h3>
            <input type="text" name="eventHostEmail" placeholder="Email of Event Host" value={formData.eventHostEmail} onChange={handleChange}/>
            </div>

            {/* Registration cost */}
            <div className="eventRegistrationcostdiv">
            <h3>Registration Cost</h3>
            <input type="text" name="eventRegistrationCost" placeholder="Price to pay" value={formData.eventRegistrationCost} onChange={handleChange}/>
            </div>
            
            <div className="eventLinkDiv">
            <h3>Registration Link</h3>
            <input type="url" name="link" placeholder="Enter registration URL"value={formData.link} onChange={handleChange} required pattern="https?://.+"
            title="Please enter a valid URL starting with http:// or https://"/>
            </div>
            
            <button>Submit</button>


        </form>
      </div>
    </>
  );
};

export default OrganiseEvent;
