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
        ← Back
      </button>
      <h2 className={styles.title}>All Reviews</h2>
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

              <p className={styles.author}>Author: {item.author}</p>
              <p className={styles.date}>Date: {item.date}</p>
              <p className={styles.content}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
