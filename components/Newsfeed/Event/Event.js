import React from 'react';

const Event = () => {
  return (
    <>
      <div class='event-content'>
        <div class='event-image'>
          <img src='./img/event.jpg' alt='' />
        </div>
        <div class='event-details'>
          <p>Marvin McKinney Couple Party</p>
          <ul>
            <li>
              <img src='./icons/calendar.png' />
              <span> 24:05</span>
            </li>
            <li>
              <img src='./icons/calendar.png' />
              <span> Krakow</span>
            </li>
            <li>
              <img src='./icons/calendar.png' />
              <span> 2/10</span>
            </li>
            <li>
              <img src='./icons/calendar.png' />
              <span>Metroville,USA</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Event;
