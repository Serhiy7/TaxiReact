import React from "react";
import styles from "./FeaturedItem.module.sass";

const FeaturedItem = ({ item, type, onReadMore, showFullContent = false }) => {
  return (
    <div className={styles.item}>
      {(item.image || item.avatar) && (
        <img
          src={item.image || item.avatar}
          alt={item.title || item.author}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        <h4>{item.title}</h4>
        <p>{showFullContent ? item.fullContent : item.content}</p>
        {showFullContent && (
          <>
            <p>Author: {item.author}</p>
            <p>Date: {item.date}</p>
          </>
        )}
        <div className={styles.meta}>
          {type === "news" && <span className={styles.date}>{item.date}</span>}
          {type === "review" && (
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
          )}
          {!showFullContent && (
            <button
              onClick={() => onReadMore(item)}
              className={styles.readMoreBtn}
            >
              {type === "news" ? "Read more" : "Read full review"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
