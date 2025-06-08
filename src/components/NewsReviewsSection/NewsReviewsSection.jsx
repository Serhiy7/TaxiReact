import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewsReviewsSection.module.sass";

const NewsReviewsSection = () => {
  const navigate = useNavigate();

  const news = [
    {
      id: 1,
      title: "Новое авто в наличии!",
      content:
        "В нашем автопарке появилось новое авто: Tesla Model S 2025 года.",
      date: "01.03.2025",
      image: "/images/tesla-model-s.jpg",
      fullContent: "Tesla Model S 2025 года с запасом хода до 650 км...",
    },
    {
      id: 2,
      title: "Снижена цена на аренду Toyota Corolla",
      content: "Теперь аренда популярной Toyota Corolla стала еще доступнее.",
      date: "25.02.2025",
      image: "/images/toyota-corolla.jpg",
      fullContent: "Toyota Corolla - надежный и экономичный автомобиль...",
    },
  ];

  const reviews = [
    {
      id: 1,
      title: "Отличный сервис!",
      content: "Очень доволен качеством обслуживания и автомобилями.",
      author: "Иван И.",
      rating: 5,
      avatar: "/avatars/ivan.jpg",
      fullContent: "Подробный отзыв о сервисе и качестве автомобилей...",
    },
    {
      id: 2,
      title: "Быстрое оформление",
      content: "Быстро оформили документы, машина в отличном состоянии.",
      author: "Мария К.",
      rating: 4,
      avatar: "/avatars/maria.jpg",
      fullContent: "Подробный отзыв о процессе оформления аренды...",
    },
  ];

  const stats = [
    { value: "150+", label: "Автомобилей в парке" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" },
    { value: "5 лет", label: "На рынке" },
  ];

  // Обработчики переходов
  const handleReadNews = (newsItem) => {
    navigate("/news-detail", { state: { newsItem } });
  };

  const handleAllNews = () => {
    navigate("/all-news", { state: { news } });
  };

  const handleAllReviews = () => {
    navigate("/all-reviews", { state: { reviews } });
  };

  const handleWriteReview = () => {
    navigate("/write-review");
  };

  const handleReadFullReview = (reviewItem) => {
    navigate("/review-detail", { state: { reviewItem } });
  };

  return (
    <section className={styles.newsReviewsSection} id="news">
      <div className={styles.sectionHeader}>
        <h2>Новости и отзывы</h2>
        <p className={styles.sectionSubtitle}>
          Будьте в курсе последних событий и мнений наших клиентов
        </p>
      </div>

      <div className={styles.contentWrapper}>
        {/* Секция новостей */}
        <div className={styles.newsList}>
          <div className={styles.sectionTitle}>
            <h3>Последние новости</h3>
            <button onClick={handleAllNews} className={styles.viewAllBtn}>
              Все новости →
            </button>
          </div>
          {news.map((item) => (
            <div key={item.id} className={styles.newsItem}>
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
                  <button
                    onClick={() => handleReadNews(item)}
                    className={styles.readMoreBtn}
                  >
                    Читать подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Секция отзывов */}
        <div className={styles.reviewsList}>
          <div className={styles.sectionTitle}>
            <h3>Отзывы клиентов</h3>
            <button onClick={handleAllReviews} className={styles.viewAllBtn}>
              Все отзывы →
            </button>
          </div>
          {reviews.map((item) => (
            <div key={item.id} className={styles.reviewItem}>
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
                <button
                  onClick={() => handleReadFullReview(item)}
                  className={styles.readFullBtn}
                >
                  Читать полностью
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Секция статистики */}
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

      {/* CTA секция */}
      <div className={styles.ctaSection}>
        <h3>Хотите оставить отзыв?</h3>
        <p>Поделитесь своим опытом работы с нами</p>
        <button onClick={handleWriteReview} className={styles.ctaButton}>
          Написать отзыв
        </button>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
