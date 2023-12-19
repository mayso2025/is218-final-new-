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
        <i>
          Hero Section Image <a href="https://www.pexels.com/photo/cheerful-barista-speaking-with-crop-coworker-against-coffee-machine-6205609/">hyperlink</a>.
      </i>
      <i>
          Center Image 1 <a href="https://www.pexels.com/photo/group-of-friends-hanging-out-933964/">hyperlink</a>.
      </i>
      <i>
          Center Image 2 <a href="https://www.pexels.com/photo/man-in-gray-crew-neck-t-shirt-holding-black-and-white-plastic-cup-4790061/">hyperlink</a>.
      </i>
      <i>
          Center Image 3 <a href="https://www.pexels.com/photo/two-people-having-coffee-while-talking-3874031/">hyperlink</a>.
      </i>
      <i>
          Center Image 4 <a href="https://pixabay.com/photos/man-woman-dog-pet-pug-owners-2425121/">hyperlink</a>.
      </i>
      <i>
          Lady Barista Image <a href="https://www.pexels.com/photo/woman-making-pastries-on-the-table-2165919/">hyperlink</a>.
      </i>
      </div>

      <div className="column">
        <h1>Contacts and Socials</h1>
        <i>Email: info@sernitybrew.com</i>
        <i>Facebook</i>
        <i>Instagram</i>
        <i>Twitter</i>
        <i> 555-123-4567 </i>
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
