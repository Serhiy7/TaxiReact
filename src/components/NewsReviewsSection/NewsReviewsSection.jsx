import React from "react";
import { useNavigate } from "react-router-dom";
import { useNewsData } from "../NewsReviewsSection/hooks/useNewsData";
import { useReviewsData } from "../NewsReviewsSection/hooks/useReviewsData";
import FeaturedItem from "../NewsReviewsSection/Reviews/FeaturedItem/FeaturedItem";
import styles from "./NewsReviewsSection.module.sass";

const NewsReviewsSection = () => {
  const navigate = useNavigate();
  const { news } = useNewsData();
  const { reviews } = useReviewsData();

  const stats = [
    { value: "150+", label: "Автомобилей в парке" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "24/7", label: "Поддержка" },
    { value: "5 лет", label: "На рынке" },
  ];

  const handleReadNews = (newsItem) =>
    navigate("/news-detail", { state: { newsItem } });
  const handleAllNews = () => navigate("/all-news");
  const handleAllReviews = () => navigate("/all-reviews");
  const handleWriteReview = () => navigate("/write-review");
  const handleReadFullReview = (reviewItem) =>
    navigate("/review-detail", { state: { reviewItem } });

  const displayedNews = news.slice(0, 2);
  const displayedReviews = reviews.slice(0, 4);

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
            <button onClick={handleAllNews} className={styles.viewAllBtn}>
              Все новости →
            </button>
          </div>
          {displayedNews.map((item) => (
            <FeaturedItem
              key={item.id}
              item={item}
              type="news"
              onReadMore={handleReadNews}
            />
          ))}
        </div>

        <div className={styles.reviewsList}>
          <div className={styles.sectionTitle}>
            <h3>Отзывы клиентов</h3>
            <button onClick={handleAllReviews} className={styles.viewAllBtn}>
              Все отзывы →
            </button>
          </div>
          {displayedReviews.map((item) => (
            <FeaturedItem
              key={item.id}
              item={item}
              type="review"
              onReadMore={handleReadFullReview}
            />
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
        <button onClick={handleWriteReview} className={styles.ctaButton}>
          Написать отзыв
        </button>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
