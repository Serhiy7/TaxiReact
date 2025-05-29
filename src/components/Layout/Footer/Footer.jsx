import styles from "./Footer.module.sass";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <p className={styles.title}>Аренда авто под такси в Варшаве</p>
        <p className={styles.contact}>
          Свяжитесь с нами:
          <a href="tel:+48123456789" className={styles.link}>
            +48 123 456 789
          </a>
          |
          <a href="mailto:info@shpax-arenda.pl" className={styles.link}>
            info@shpax-arenda.pl
          </a>
        </p>
        <p className={styles.copyright}>
          © 2025 Аренда авто под такси в Варшаве. Все права защищены.
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
          Адрес: ул. Примерная, 10, Варшава
          <br />
          График работы: Пн–Пт с 9:00 до 18:00
        </p>
      </div>
    </footer>
  );
};

export default Footer;
