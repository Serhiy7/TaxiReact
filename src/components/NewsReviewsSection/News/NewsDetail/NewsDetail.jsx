import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NewsDetail.module.sass";

const BackArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { newsItem } = location.state || {};

  if (!newsItem) {
    return <div className={styles.notFound}>News not found.</div>;
  }

  const { id, title, date, image, content, fullContent, gallery, tags, type } =
    newsItem;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.newsDetail}>
      <button onClick={goBack} className={styles.backButton}>
        <BackArrowIcon /> Back
      </button>

      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.meta}>
          <span className={styles.type}>{type}</span> |{" "}
          <span className={styles.date}>{date}</span> |{" "}
          <span className={styles.id}>ID: {id}</span>
        </p>
      </div>

      {image && <img src={image} alt={title} className={styles.mainImage} />}

      <div className={styles.contentSection}>
        <h3>Brief Description:</h3>
        <p className={styles.content}>{content}</p>
      </div>

      {fullContent && (
        <div className={styles.fullContent}>
          <h3>Detailed Description:</h3>
          {Array.isArray(fullContent) ? (
            fullContent.map((text, index) => (
              <p key={index} className={styles.paragraph}>
                {text}
              </p>
            ))
          ) : (
            <p className={styles.paragraph}>{fullContent}</p>
          )}
        </div>
      )}

      {gallery?.length > 0 && (
        <div className={styles.gallery}>
          <h3>Gallery ({gallery.length} photos)</h3>
          <div className={styles.galleryImages}>
            {gallery.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${title} - photo ${index + 1}`}
                className={styles.galleryImage}
              />
            ))}
          </div>
        </div>
      )}

      {tags?.length > 0 && (
        <div className={styles.tags}>
          <h3>Tags:</h3>
          <div className={styles.tagsContainer}>
            {tags.map((tag, i) => (
              <span key={i} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
