import styles from './Hours.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define the open hours for each day
const openHours = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const OpenHours = () => {
  return (
    <div className={styles.hours}>
      <h2>Open Hours</h2>
      <ul>
        {openHours.map(({ day, hours }) => (
          <li key={day}>
            <strong>{day}:</strong> {hours}
          </li>
        ))}
      </ul>
    </div>
  );
};


  

export default OpenHours;
