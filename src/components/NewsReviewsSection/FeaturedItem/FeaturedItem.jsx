// FeaturedItem/FeaturedItem.jsx
import React from "react";
import styles from "./FeaturedItem.module.sass";

const FeaturedItem = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.featuredItem}>
      <img src={imageUrl} alt={title} className={styles.featuredImage} />
      <h3 className={styles.featuredTitle}>{title}</h3>
      <p className={styles.featuredDescription}>{description}</p>
    </div>
  );
};

export default FeaturedItem;
