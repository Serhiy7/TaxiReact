import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./AllNews.module.sass";

const AllNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { news = [] } = location.state || {};

  const handleReadMore = (newsItem) => {
    navigate("/news-detail", { state: { newsItem } });
  };

  return (
    <div className={styles.allNews}>
      <h2 className={styles.title}>Все новости</h2>
      {news.length === 0 ? (
        <p className={styles.noNews}>Новости отсутствуют</p>
      ) : (
        <div className={styles.newsList}>
          {news.map((item) => (
            <div key={item.id || item.title} className={styles.newsItem}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.newsImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default-news.jpg";
                  }}
                />
              )}
              <div className={styles.newsContent}>
                <h3>{item.title}</h3>
                <p>{item.shortContent || item.content}</p>
                <div className={styles.newsMeta}>
                  <span className={styles.date}>{item.date}</span>
                  <button
                    onClick={() => handleReadMore(item)}
                    className={styles.readMoreBtn}
                    aria-label={`Читать подробнее о ${item.title}`}
                  >
                    Читать подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNews;
