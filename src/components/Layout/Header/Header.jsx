import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.sass";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <span className={styles.logoPrimary}>Oleh</span>
          <span className={styles.logoAccent}>Bilenkyi</span>
        </div>

        <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ""}`}>
          <div
            className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}
          >
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/news" onClick={closeMenu}>
              News / Reviews
            </Link>
            <Link to="/cars" onClick={closeMenu}>
              Fleet
            </Link>
            <Link to="/videos" onClick={closeMenu}>
              Videos
            </Link>
            <Link to="/tariffs" onClick={closeMenu}>
              Tariffs
            </Link>
          </div>
        </nav>

        <div
          className={`${styles.mobileMenuBtn} ${
            isMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.checkerboardBar}></div>
    </header>
  );
};

export default Header;
