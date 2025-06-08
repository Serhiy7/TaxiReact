import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NewsDetail.module.sass";

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { newsItem } = location.state || {};

  if (!newsItem) {
    return (
      <div className={styles.newsDetail}>
        <p>Новость не найдена</p>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          Вернуться назад
        </button>
      </div>
    );
  }

  return (
    <div className={styles.newsDetail}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Вернуться к списку новостей
      </button>

      <h2 className={styles.title}>{newsItem.title}</h2>

      {newsItem.image && (
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className={styles.newsImage}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/default-news.jpg";
          }}
        />
      )}

      <p className={styles.content}>
        {newsItem.fullContent || newsItem.content}
      </p>

      {newsItem.additionalContent && (
        <div className={styles.additionalContent}>
          {newsItem.additionalContent}
        </div>
      )}

      <div className={styles.footer}>
        <span className={styles.date}>{newsItem.date}</span>
        {newsItem.author && (
          <span className={styles.author}>Автор: {newsItem.author}</span>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
