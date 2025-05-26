import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation2';
import './ExploreHackathons.css';
import Cards from '../Cards/Cards';
import axios from 'axios';

const ExploreHackathons = () => {
  const [openHackathons, setOpenHackathons] = useState([]);
  const [upcomingHackathons, setUpcomingHackathons] = useState([]);
  const [pastHackathons, setPastHackathons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/formData');
      const events = response.data;
      
      filterHackathons(events); // <-- PASS EVENTS HERE
    } catch (error) {
      console.error(error);
    }
  };
  

  const filterHackathons = (hackathons) => {
    const today = new Date();
    const open = [];
    const upcoming = [];
    const past = [];

    hackathons.forEach(hackathon => {
      if (hackathon.eventType === "Hackathon") {
        const eventDate = new Date(hackathon.eventDate);

        if (eventDate.toDateString() >= today.toDateString()) {
          open.push(hackathon);
        } if (eventDate > today) {
          upcoming.push(hackathon);
        } if (eventDate < today) {
          past.push(hackathon);
        }
      }
    });

    setOpenHackathons(open);
    setUpcomingHackathons(upcoming);
    setPastHackathons(past);
  };

  return (
    <>
      <div>
        <Navigation />
      </div>

      <main className='Explore-Hackathons'>
        <h1 className='open-heading'>Open Hackathons</h1>
        <div className='Open-hackathons'>
          <Cards events={openHackathons} />
        </div>

        <div className='Upcoming-hackathons'>
          <h3 className='section-title'>Upcoming Hackathons</h3>
          <Cards events={upcomingHackathons} />
        </div>

        <div className='Past-hackathons'>
          <h3 className='section-title'>Past Hackathons</h3>
          <Cards events={pastHackathons} />
        </div>
      </main>
    </>
  );
}

export default ExploreHackathons;
