import styles from "./NewsReviewsSection.module.sass";

const NewsReviewsSection = () => {
  const news = [
    {
      title: "Новое авто в наличии!",
      content:
        "В нашем автопарке появилось новое авто: Tesla Model S 2025 года. Отличный вариант для тех, кто хочет работать на электромобиле!",
      date: "01.03.2025",
    },
    {
      title: "Снижена цена на аренду Toyota Corolla",
      content:
        "Теперь аренда популярной Toyota Corolla стала еще доступнее. Спешите воспользоваться предложением!",
      date: "25.02.2025",
    },
  ];

  const reviews = [
    {
      title: "Отличный сервис!",
      content:
        "Очень доволен качеством обслуживания и автомобилями. Рекомендую!",
      author: "Иван И.",
    },
    {
      title: "Быстрое оформление",
      content:
        "Быстро оформили документы, машина в отличном состоянии. Спасибо!",
      author: "Мария К.",
    },
  ];

  return (
    <>
      <section className={styles.newsReviewsSection} id="news">
        <div className={styles.newsList}>
          <h2>Новости</h2>
          {news.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <small>{item.date}</small>
            </div>
          ))}
        </div>
        <div className={styles.reviewsList}>
          <h2>Отзывы</h2>
          {reviews.map((item, index) => (
            <div key={index} className={styles.reviewItem}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <small>{item.author}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default NewsReviewsSection;
