import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="column">
        <p>Serenity Brew</p>
      </div>
      <div className="column">
        <h1>Page Information </h1>
        <i>Home </i>
        <i>About </i>
        <i>Menu </i>
     </div> 
      <div className="column">
        <h1>Photo Credits </h1>
        <i> </i>
        <i> </i>
        <i> </i>
        <i> </i>
      </div>

      <div className="column">
        <h1> </h1>
        <i>D20 Dice made by DarkAthena from Pixabay</i>
        <i>Lightbulb made by PaliGraficas from Pixabay</i>
        <i>Bird made by Uki_71 from Pixabay</i>
        <i>Portfolio made by poli_ from Pixabay</i>
        <i>Paisley Curves Leaf made by Clker-Free-Vector-Images from Pixabay</i>
      </div>

      <div className="column">
        <h3><i className="fas fa-envelope-open-text"></i>Send Your Email</h3>
        <form className="newsletter-form">
          <input type="email" placeholder="Email Address" required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
