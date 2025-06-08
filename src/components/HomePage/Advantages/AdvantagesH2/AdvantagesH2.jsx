import { useEffect } from "react";
import styles from "./AdvantagesH2.module.scss";

const AdvaH2 = () => {
  useEffect(() => {
    // Добавляем обработчик для анимации при скролле
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const title = document.querySelector(`.${styles.title}`);
    if (title) observer.observe(title);

    return () => {
      if (title) observer.unobserve(title);
    };
  }, []);

  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>
        <span className={styles.titleText}>Our Advantages</span>
        <span className={styles.titleShadow} aria-hidden="true">
          Our Advantages
        </span>
      </h2>
      <div className={styles.subLine}></div>
    </div>
  );
};

export default AdvaH2;
