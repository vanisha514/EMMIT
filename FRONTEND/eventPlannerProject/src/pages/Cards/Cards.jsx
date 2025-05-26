import React from 'react';
import "./Cards.css";

const Cards = ({ events }) => {
  const today = new Date();

  return (
    <>
      {events.map((data, index) => {
        const eventDate = new Date(data.eventDate);
        const isPast = eventDate < today.setHours(0, 0, 0, 0); // ignore time portion

        return (
          <div className='eventCard' key={index}>
            <div className="col-1">
              <p className='eventHeading'>{data.eventName}</p>
              <p className='eventType'>{data.eventType}</p>
            </div>

            <div className="col-2">
              <div className='eventTheme'>
                <p>Theme</p>
                <div className="eventThemeTech">
                  <p>{data.eventTheme1}</p>
                  <p>{data.eventTheme2}</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <p className="eventMode">{data.eventMode}</p>
              <p className="eventStatus">
                {isPast ? "Closed" : "Open"}
              </p>
              <p className="eventDate">{eventDate.toLocaleDateString()}</p>

              {/* Button logic based on date and link */}
              {!isPast ? (
                data.link ? (
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <button>Apply Now</button>
                  </a>
                ) : (
                  <button disabled>No Link</button>
                )
              ) : (
                <button disabled>Registration Closed</button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
