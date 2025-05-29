import styles from "./VehicleFleet.module.sass";

const VehicleFleet = () => {
  // Имитация данных об автомобилях
  const cars = [
    {
      id: 1,
      main_image: "https://via.placeholder.com/300x180?text=Toyota+Corolla",
      name: "Toyota Corolla",
      version: "1.6 Hybrid",
      rental_price: 1200,
      deposit_price: 5000,
      description:
        "Экономичный гибрид с низким расходом топлива. Идеален для работы в городе.",
      created_at: "15.05.2025",
      updated_at: "20.05.2025",
    },
    {
      id: 2,
      main_image: "https://via.placeholder.com/300x180?text=Skoda+Octavia",
      name: "Skoda Octavia",
      version: "1.4 TSI",
      rental_price: 1400,
      deposit_price: 6000,
      description:
        "Просторный салон и комфортная подвеска. Отличный выбор для работы.",
      created_at: "10.05.2025",
      updated_at: "18.05.2025",
    },
    {
      id: 3,
      main_image: "https://via.placeholder.com/300x180?text=Volkswagen+Golf",
      name: "Volkswagen Golf",
      version: "1.5 TSI",
      rental_price: 1300,
      deposit_price: 5500,
      description: "Надежный немецкий автомобиль с отличной динамикой.",
      created_at: "12.05.2025",
      updated_at: "19.05.2025",
    },
  ];

  const news = [
    {
      title: "Новое авто в наличии!",
      content:
        "В нашем автопарке появилось новое авто: Tesla Model S 2025 года. Отличный вариант для тех, кто хочет работать на электромобиле!",
      date: "01.03.2025",
    },
    {
      title: "Снижена цена на аренду Toyota Corolla",
      content:
        "Теперь аренда популярной Toyota Corolla стала еще доступнее. Спешите воспользоваться предложением!",
      date: "25.02.2025",
    },
  ];

  const reviews = [
    {
      title: "Отличный сервис!",
      content:
        "Очень доволен качеством обслуживания и автомобилями. Рекомендую!",
      author: "Иван И.",
    },
    {
      title: "Быстрое оформление",
      content:
        "Быстро оформили документы, машина в отличном состоянии. Спасибо!",
      author: "Мария К.",
    },
  ];

  return (
    <>
      <section className={styles.autopark} id="autopark">
        <h2 className={styles.sectionTitle}>Наш автопарк</h2>
        <div className={styles.autoparkGrid}>
          {cars.map((car) => (
            <div key={car.id} className={styles.carCard}>
              <div className={styles.carImage}>
                <img src={car.main_image} alt={car.name} />
              </div>
              <h3 className={styles.carTitle}>{car.name}</h3>
              <div className={styles.carVersion}>{car.version}</div>
              <div className={styles.carPrice}>
                от {car.rental_price} злотых/неделя
              </div>
              <div className={styles.carDeposit}>
                Залог: {car.deposit_price} злотых
              </div>
              <div className={styles.carDescription}>{car.description}</div>
              <div className={styles.carDates}>
                <div>Дата добавления: {car.created_at}</div>
                <div>Последнее обновление: {car.updated_at}</div>
              </div>
              <div className={styles.carActions}>
                <button className={styles.btnRent}>Арендовать</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.newsReviewsSection} id="news">
        <div className={styles.newsList}>
          <h2>Новости</h2>
          {news.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <small>{item.date}</small>
            </div>
          ))}
        </div>
        <div className={styles.reviewsList}>
          <h2>Отзывы</h2>
          {reviews.map((item, index) => (
            <div key={index} className={styles.reviewItem}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <small>{item.author}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VehicleFleet;
