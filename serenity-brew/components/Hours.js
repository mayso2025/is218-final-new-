import styles from './Hours.module.css';
import Image from 'next/image';
import Link from 'next/link';
//
const Hours = () => {
    
    return (
    <div className={styles.location}>
        <h1>Hours Of Operation</h1>
        <ul>
            <li>Monday: 7:00AM - 5:00PM</li>
            <li>Tuesday: 7:00AM - 5:00PM</li>
            <li>Wednesday: Closed</li>
            <li>Thursday: 7:00AM - 5:00PM</li>
            <li>Friday: 7:00AM - 5:00PM</li>
            <li>Saturday: 8:00AM - 3:00PM</li>
            <li>Sunday: Closed</li>
        </ul>
    </div>
  

  );
};
export default Location;