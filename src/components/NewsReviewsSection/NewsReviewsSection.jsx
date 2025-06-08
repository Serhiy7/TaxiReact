import styles from "./NewsReviewsSection.module.sass";

const NewsReviewsSection = () => {
  const news = [
    {
      title: "Новое авто в наличии!",
      content:
        "В нашем автопарке появилось новое авто: Tesla Model S 2025 года. Отличный вариант для тех, кто хочет работать на электромобиле!",
      date: "01.03.2025",
      image: "/images/tesla-model-s.jpg",
    },
    {
      title: "Снижена цена на аренду Toyota Corolla",
      content:
        "Теперь аренда популярной Toyota Corolla стала еще доступнее. Спешите воспользоваться предложением!",
      date: "25.02.2025",
      image: "/images/toyota-corolla.jpg",
    },
  ];

  const reviews = [
    {
      title: "Отличный сервис!",
      content:
        "Очень доволен качеством обслуживания и автомобилями. Рекомендую!",
      author: "Иван И.",
      rating: 5,
      avatar: "/avatars/ivan.jpg",
    },
    {
      title: "Быстрое оформление",
      content:
        "Быстро оформили документы, машина в отличном состоянии. Спасибо!",
      author: "Мария К.",
      rating: 4,
      avatar: "/avatars/maria.jpg",
    },
  ];

  const stats = [
    { value: "150+", label: "Автомобилей в парке" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" },
    { value: "5 лет", label: "На рынке" },
  ];

  return (
    <section className={styles.newsReviewsSection} id="news">
      <div className={styles.sectionHeader}>
        <h2>Новости и отзывы</h2>
        <p className={styles.sectionSubtitle}>
          Будьте в курсе последних событий и мнений наших клиентов
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.newsList}>
          <div className={styles.sectionTitle}>
            <h3>Последние новости</h3>
            <button className={styles.viewAllBtn}>Все новости →</button>
          </div>
          {news.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.newsImage}
                />
              )}
              <div className={styles.newsContent}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                <div className={styles.newsMeta}>
                  <span className={styles.date}>{item.date}</span>
                  <button className={styles.readMoreBtn}>
                    Читать подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reviewsList}>
          <div className={styles.sectionTitle}>
            <h3>Отзывы клиентов</h3>
            <button className={styles.viewAllBtn}>Все отзывы →</button>
          </div>
          {reviews.map((item, index) => (
            <div key={index} className={styles.reviewItem}>
              <div className={styles.reviewHeader}>
                {item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className={styles.avatar}
                  />
                )}
                <div>
                  <h4>{item.title}</h4>
                  <div className={styles.rating}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < item.rating ? styles.starFilled : styles.starEmpty
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p>{item.content}</p>
              <div className={styles.reviewFooter}>
                <span className={styles.author}>{item.author}</span>
                <span className={styles.reviewDate}>2 дня назад</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.statsSection}>
        <h3 className={styles.statsTitle}>Наши достижения</h3>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h3>Хотите оставить отзыв?</h3>
        <p>Поделитесь своим опытом работы с нами</p>
        <button className={styles.ctaButton}>Написать отзыв</button>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
