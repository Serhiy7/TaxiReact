import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WriteReview.module.sass";

const WriteReview = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    rating: 5,
    author: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь логика отправки отзыва
    navigate("/");
  };

  return (
    <div className={styles.writeReview}>
      <h2>Написать отзыв</h2>
      <form onSubmit={handleSubmit}>
        {/* Поля формы */}
        <button type="submit">Отправить отзыв</button>
      </form>
    </div>
  );
};

export default WriteReview;
