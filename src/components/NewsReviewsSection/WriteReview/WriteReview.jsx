// WriteReview.jsx
import React, { useState } from 'react';
import styles from './WriteReview.module.sass';

const WriteReview = () => {
  const [review, setReview] = useState({ title: '', content: '', rating: 5 });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log(review);
  };

  return (
    <div className={styles.writeReview}>
      <h2 className={styles.title}>Написать отзыв</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            id="title"
            value={review.title}
            onChange={(e) => setReview({ ...review, title: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">Отзыв</label>
          <textarea
            id="content"
            value={review.content}
            onChange={(e) => setReview({ ...review, content: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="rating">Оценка</label>
          <select
            id="rating"
            value={review.rating}
            onChange={(e) => setReview({ ...review, rating: parseInt(e.target.value) })}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>Отправить отзыв</button>
      </form>
    </div>
  );
};

export default WriteReview;
