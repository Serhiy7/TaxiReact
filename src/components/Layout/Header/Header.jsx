import styles from "./Header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <span className={styles.logoPrimary}>SHPAX</span>
          <span className={styles.logoAccent}>ARENDA</span>
        </div>

        <nav className={styles.navMenu}>
          <div className={styles.navLinks}>
            <a href="#hero" className={styles.navLink}>
              Главная
            </a>
            <a href="#autopark" className={styles.navLink}>
              Автопарк
            </a>
            <a href="#news" className={styles.navLink}>
              Новости
            </a>
            <a href="#video" className={styles.navLink}>
              Видео
            </a>
            <a href="#footer" className={styles.navLink}>
              Контакты
            </a>

            <div className={styles.dropdown}>
              {/* <button className={styles.dropbtn}>Документы ▼</button> */}
              <div className={styles.dropdownContent}>
                {/* <a href="admin/dashboard.php">Админка</a>
                <a href="form/">Формы</a>
                <a href="privacy_policy/">Политика</a>
                <a href="regulamin/">Регламент</a>
                <a href="index.html">Главная страница</a> */}
              </div>
            </div>
          </div>
        </nav>

        {/* <div className={styles.mobileMenuBtn}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>
      <div className={styles.checkerboardBar}></div>
    </header>
  );
};

export default Header;
