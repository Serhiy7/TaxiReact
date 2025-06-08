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
    { value: "150+", label: "Cars in fleet" },
    { value: "98%", label: "Satisfied clients" },
    { value: "24/7", label: "Support" },
    { value: "5 years", label: "On the market" },
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
        <h2>News and Reviews</h2>
        <p className={styles.sectionSubtitle}>
          Stay updated with the latest news and opinions from our clients
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.newsList}>
          <div className={styles.sectionTitle}>
            <h3>Latest News</h3>
            <button onClick={handleAllNews} className={styles.viewAllBtn}>
              All News →
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
            <h3>Customer Reviews</h3>
            <button onClick={handleAllReviews} className={styles.viewAllBtn}>
              All Reviews →
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
        <h3 className={styles.statsTitle}>Our Achievements</h3>
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
        <h3>Want to leave a review?</h3>
        <p>Share your experience with us</p>
        <button onClick={handleWriteReview} className={styles.ctaButton}>
          Write a Review
        </button>
      </div>
    </section>
  );
};

export default NewsReviewsSection;
