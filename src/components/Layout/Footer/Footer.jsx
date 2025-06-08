import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <p className={styles.title}>Car Rental for Taxis in Warsaw</p>
        <p className={styles.contact}>
          Contact Us:
          <a href="tel:+48123456789" className={styles.link}>
            +48 123 456 789
          </a>
          |
          <a href="mailto:info@shpax-arenda.pl" className={styles.link}>
            info@shpax-arenda.pl
          </a>
        </p>
        <p className={styles.copyright}>
          © 2025 Car Rental for Taxis in Warsaw. All rights reserved.
        </p>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.socialIcons}>
          <a
            href="https://www.instagram.com/nikitashpakovski"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@Shpakovskyi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className={styles.info}>
          Address: 10 Example Street, Warsaw
          <br />
          Working Hours: Mon–Fri from 9:00 AM to 6:00 PM
        </p>
      </div>
      <div className={styles.additionalInfo}>
        <p className={styles.motto}>
          Your trusted partner for taxi car rentals in Warsaw.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
