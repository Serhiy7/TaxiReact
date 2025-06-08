// AllReviews.jsx
import React from 'react';
import styles from './AllReviews.module.sass';

const AllReviews = ({ reviews }) => {
  return (
    <div className={styles.allReviews}>
      <h2 className={styles.title}>Все отзывы</h2>
      <div className={styles.reviewsList}>
        {reviews.map((item, index) => (
          <div key={index} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              {item.avatar && <img src={item.avatar} alt={item.author} className={styles.avatar} />}
              <div>
                <h3>{item.title}</h3>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < item.rating ? styles.starFilled : styles.starEmpty}>★</span>
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
  );
};

export default AllReviews;
