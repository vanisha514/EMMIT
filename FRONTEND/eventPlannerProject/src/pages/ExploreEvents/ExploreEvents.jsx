import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation2';
import './ExploreEvents.css';
import Cards from '../Cards/Cards';
import axios from 'axios';

const ExploreEvents = () => {
  const [openEvents, setOpenEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/formData');
      const events = response.data;
      filterEvents(events);
    } catch (error) {
      console.error(error);
    }
  };
  
  const filterEvents = (events) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to start of day for clean comparison
  
    const past = [];
    const upcoming = [];
    const open = [];
  
    events.forEach(event => {
      if (event.eventType === 'Technical Event') {
        const eventDate = new Date(event.eventDate);
        eventDate.setHours(0, 0, 0, 0); // reset event date to start of day
  
        if (eventDate.getTime() < today.getTime()) {
          past.push(event);
        }
         if (eventDate.getTime() >= today.getTime()) {
          open.push(event);
        }
         if (eventDate.getTime() > today.getTime()){
          upcoming.push(event);
        }
      }
    });
  
    setPastEvents(past);
    setUpcomingEvents(upcoming);
    setOpenEvents(open);
  };
  

  return (
    <>
      <div>
        <Navigation />
      </div>

      <main className='Explore-Event'>
        <h1 className='open-heading'>Open Events</h1>
        <div className='Open-events'>
          <Cards events={openEvents} />
        </div>

        <div className='Upcoming-events'>
          <h3 className='section-title'>Upcoming Events</h3>
          <Cards events={upcomingEvents} />
        </div>

        <div className='Past-events'>
          <h3 className='section-title'>Past Events</h3>
          <Cards events={pastEvents} />
        </div>
      </main>
    </>
  );
}

export default ExploreEvents;
