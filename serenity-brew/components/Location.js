import styles from './Location.module.css';
import Image from 'next/image';
import Link from 'next/link';
//
const Location = () => {
    
    return (
    <div className={styles.location}>
        <h1>Location</h1>
        <p>Serenity Brew</p>
        <p>123 Java Street</p>
        <p>Newark, NJ 07101</p>
    </div>
  

  );
};
export default Location;