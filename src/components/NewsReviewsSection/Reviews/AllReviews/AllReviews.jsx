import React from "react";
import { useNavigate } from "react-router-dom";
import { useReviewsData } from "../../hooks/useReviewsData";
import styles from "./AllReviews.module.sass";

const AllReviews = () => {
  const navigate = useNavigate();
  const { reviews } = useReviewsData();

  const goBack = () => navigate(-1);
  const handleReadFullReview = (reviewItem) =>
    navigate("/review-detail", { state: { reviewItem } });

  return (
    <div className={styles.allReviews}>
      <button onClick={goBack} className={styles.backButton}>
        ← Назад
      </button>
      <h2 className={styles.title}>Все отзывы</h2>
      <div className={styles.reviewsList}>
        {reviews.map((item) => (
          <div key={item.id} className={styles.reviewCard}>
            {item.avatar && (
              <img
                src={item.avatar}
                alt={item.author}
                className={styles.avatar}
              />
            )}
            <div className={styles.reviewContent}>
              <div className={styles.reviewHeader}>
                <h3>{item.title}</h3>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < item.rating ? styles.filled : styles.empty}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <p className={styles.author}>Автор: {item.author}</p>
              <p className={styles.date}>Дата: {item.date}</p>
              {/* Добавлено отображение краткого содержания */}
              <p className={styles.content}>{item.content}</p>
              {/* Добавлена кнопка для чтения полного отзыва */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
