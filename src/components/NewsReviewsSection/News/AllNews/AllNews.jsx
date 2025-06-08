import React from "react";
import { useNavigate } from "react-router-dom";
import { useNewsData } from "../../hooks/useNewsData";
import FeaturedItem from "../../Reviews/FeaturedItem/FeaturedItem";
import styles from "./AllNews.module.sass";

const BackArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AllNews = () => {
  const navigate = useNavigate();
  const { news } = useNewsData();

  const goBack = () => navigate(-1);

  return (
    <div className={styles.allNews}>
      <button onClick={goBack} className={styles.backButton}>
        <BackArrowIcon /> Back
      </button>
      <h2 className={styles.title}>All News</h2>
      <div className={styles.newsList}>
        {news.map((item) => (
          <FeaturedItem
            key={item.id}
            item={item}
            type="news"
            onReadMore={() =>
              navigate("/news-detail", { state: { newsItem: item } })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
