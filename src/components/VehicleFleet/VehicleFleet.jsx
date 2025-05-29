import styles from "./VehicleFleet.module.sass";

const VehicleFleet = () => {
  return (
    <>
      <section className={styles.section} id="autopark">
        <h2 className={styles.carH2}>Наш автопарк</h2>
        <div className={styles.autoparkGrid}>
          <div className={styles.carCard}>
            <div className={styles.carImage}>
              <img src="/path/to/car-image.jpg" alt="Название автомобиля" />
            </div>
            <h3 className={styles.carTitle}>Название автомобиля</h3>
            <div className={styles.carVersion}>Версия</div>
            <div className={styles.carPrice}>от 1500 злотых/неделя</div>
            <div className={styles.carDeposit}>Залог: 5000 злотых</div>
            <div className={styles.carDescription}>
              Описание автомобиля с основными характеристиками
            </div>
            <div className={styles.carDates}>
              <div>Дата добавления: 01.01.2025</div>
              <div>Последнее обновление: 01.01.2025</div>
            </div>
            <div className={styles.carActions}>
              <button className={styles.btnRent}>Арендовать</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.newsReviewsSection}`}
        id="news"
      >
        <div className={styles.newsList}>
          <h2>Новости</h2>
          <div className={styles.newsItem}>
            <h3>Новое авто в наличии!</h3>
            <p>
              В нашем автопарке появилось новое авто: Tesla Model S 2025 года.
              Отличный вариант для тех, кто хочет работать на электромобиле!
            </p>
            <small>01.03.2025</small>
          </div>
        </div>

        <div className={styles.reviewsList}>
          <h2>Отзывы</h2>
          <div className={styles.reviewItem}>
            <h3>Отличный сервис!</h3>
            <p>
              Очень доволен качеством обслуживания и автомобилями. Рекомендую!
            </p>
            <small>Иван И.</small>
          </div>
        </div>
      </section>
    </>
  );
};

export default VehicleFleet;
