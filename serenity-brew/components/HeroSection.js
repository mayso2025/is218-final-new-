import styles from './HeroSection.module.css'; // Import the CSS module

const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <h1>Breathe and take a sip</h1>
            <p>Sign up with your email to get a free coffee and pastry! </p>
            <button className={styles.ctaButton}>Sign Up</button>
            
        </div>
    );
};

export default HeroSection;
