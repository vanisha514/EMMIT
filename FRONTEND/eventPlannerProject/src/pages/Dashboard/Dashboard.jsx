import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [upcomingHackathons, setUpcomingHackathons] = useState([]);

  useEffect(() => {
    fetchUpcomingData();
  }, []);

  const fetchUpcomingData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/formData');
      const allEvents = response.data;
      const today = new Date();

      const upcomingEventsList = [];
      const upcomingHackathonsList = [];

      allEvents.forEach(event => {
        const eventDate = new Date(event.eventDate); // Parse the string into Date object
        if (eventDate > today) {
          if (event.eventType === "Event") {
            upcomingEventsList.push(event);
          } else if (event.eventType === "Hackathon") {
            upcomingHackathonsList.push(event);
          }
        }
      });

      setUpcomingEvents(upcomingEventsList);
      setUpcomingHackathons(upcomingHackathonsList);

    } catch (error) {
      console.error("Failed to fetch upcoming data", error);
    }
  };

  return (
    <div>
      <main className="dash-content">
        {/* first section  */}
        <div className="first-section">

          <Link to="/OrganiseEvent">
            <div className="Organise-events">
              {/* <h1>Organise Events</h1> */}
              <h1>Organise Events</h1>
            </div>
          </Link>

          <Link to="/exploreevents">
            <div className="explore-events">
              <h1>Explore Events</h1>
            </div>
          </Link>
          
          <Link to="/explorehackathons">
          <div className="explore-hackathons">
            <h1>Explore Hackathons</h1>
          </div>
          </Link>
        </div>
        {/* first section end */}

        {/* second section */}
        <div className="second-section">
          <div className="intro-box-1">
            <div className="introbox-1-content">
              <h2>Turning Your Ideas Into Reality</h2>
              <p>
                Search engine optimization is the process of imporoving
                visibility and ranking of <br></br> website in search engine{" "}
              </p>
            </div>
            <div className="introbox-1-img">
              <img src="./images/intro1-img.png" alt="" />
            </div>
          </div>

          <div className="intro-box-2">
            <div className="event-completed">
              <h1>600+</h1>
              <p>No. of Events completed </p>
            </div>
            <div className="tie-ups-made">
              <h1>500+</h1>
              <p>No. of Hack-a-thons Completed</p>
            </div>
            <div className="participants-joined">
              <h1>800+</h1>
              <p>Successfully Events Organised</p>
            </div>
          </div>
        </div>

        {/* second section end */}

<div className="project-spotlight">
  <div className="left-col">
    <div className="top-left-col">
      <div className="phone-part-1">Project Spotlight</div>
      <div className="phone-part-2"> Highlighting a section that showcases the key features, achievements, or standout elements of EMMIT</div>
    </div>

    <div className="bottom-left-col">
      <h3>Mobile Access</h3>
      <p>
        EMMIT supports full mobile responsiveness, giving users a seamless
        experience to browse, register, and manage events on-the-go. Mobile UI is
        optimized with dynamic forms and instant notifications.
      </p>
      <br />
      <h4>Smart Reminders</h4>
      <p>
        Set automated reminders for upcoming sessions or deadlines. Integrates
        with Google Calendar and email.
      </p>
    </div>
  </div>

  <div className="right-col">
    <div className="top-right-col">
      <div className="top-right-col-1">
        <h3>Live Event Tracker</h3>
        <p>
          Track your events in real-time with a dedicated dashboard showing
          attendance stats, engagement, and live updates.
        </p>
        <br />
        <h4>Admin Insights</h4>
        <p>
          Admins have access to detailed analytics, including participation rates,
          feedback scores, and revenue stats.
        </p>
      </div>

      <div className="top-right-col-2">
        <h3>Theme Scheduler</h3>
        <p>
          Organize your events with dynamic theming. Create, preview, and switch
          themes on the fly with no downtime.
        </p>
        <br />
        <h4>Multi-day Agendas</h4>
        <p>
          EMMIT lets you build detailed multi-day event schedules with time slots,
          speakers, and parallel sessions.
        </p>
      </div>
    </div>

    <div className="bottom-right-col">
      <h3>Community Engagement</h3>
      <p>
        Users can engage with others through forums, Q&A, and social media
        integration. EMMIT encourages collaboration through post-event discussions
        and surveys.
      </p>
      <br />
      <h4>Integrated Payments</h4>
      <p>
        Secure payment processing for ticketing, donations, or merchandise.
        Multiple payment gateways supported (Razorpay, Stripe, UPI).
      </p>
      <br />
      <h4>Volunteer Coordination</h4>
      <p>
        Assign roles, shifts, and tasks to volunteers. Track availability and
        receive notifications in real-time.
      </p>
    </div>
  </div>
</div>

<div className="Upcomming-Events">

  {/* Upcoming Events Section */}
  <div className="upcoming-section">
    <h1>Upcoming Events</h1>
    <div className="event-cards-container">
      {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
        <div className="upcomming-event-1" key={index}>
          <div className="event-heading">
            <h5>{event.eventName}</h5>
            <h6>{event.eventType}</h6>
          </div>
          <div className="event-theme">
            <h3>Theme</h3>
            <div className="all-event-theme">
              <p>{event.eventTheme1}</p>
              <p>{event.eventTheme2}</p>
            </div>
          </div>
          <div className="event-status">
            <p>{event.eventMode}</p>
            <p>Upcoming</p>
            <p>Open {new Date(event.eventDate).toLocaleDateString()}</p>
          </div>
          <div className="remindme-btn">
            <button>Remind me</button>
          </div>
        </div>
      )) : <p style={{ color: 'white' }}>No Upcoming Events</p>}
    </div>
  </div>

  {/* Upcoming Hackathons Section */}
  <div className="upcoming-section">
    <h1>Upcoming Hackathons</h1>
    <div className="event-cards-container">
      {upcomingHackathons.length > 0 ? upcomingHackathons.map((hackathon, index) => (
        <div className="upcomming-event-2" key={index}>
          <div className="event-heading">
            <h5>{hackathon.eventName}</h5>
            <h6>{hackathon.eventType}</h6>
          </div>
          <div className="event-theme">
            <h3>Theme</h3>
            <div className="all-event-theme">
              <p>{hackathon.eventTheme1}</p>
              <p>{hackathon.eventTheme2}</p>
            </div>
          </div>
          <div className="event-status">
            <p>{hackathon.eventMode}</p>
            <p>Upcoming</p>
            <p>Open {new Date(hackathon.eventDate).toLocaleDateString()}</p>
          </div>
          <div className="remindme-btn">
            <button>Remind me</button>
          </div>
        </div>
      )) : <p style={{ color: 'white' }}>No Upcoming Hackathons</p>}
    </div>
  </div>

</div>

        {/* -------- End Upcoming Section -------- */}

      </main>
    </div>
  );
};

export default Dashboard;
          