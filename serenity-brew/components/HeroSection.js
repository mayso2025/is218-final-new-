import styles from './herosection.module.css';
import Image from 'next/image';
import Link from 'next/link';
//
const HeroSection = () => {
    
    return (
    <div className={styles.hero}>
        <h1>Breathe and take a sip</h1>
        <p>Enjoy a complimentary coffe and pastry comb when you sign up with email!</p>
        < Link href="/signup" className={styles.button}>Sign UP</Link>
        
    </div>
  

  );
};
export default HeroSection;
