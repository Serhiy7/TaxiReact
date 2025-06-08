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
    // Logic to submit the review
    navigate("/");
  };

  return (
    <div className={styles.writeReview}>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default WriteReview;
