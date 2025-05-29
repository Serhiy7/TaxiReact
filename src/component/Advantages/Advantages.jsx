import "./Advantages.css";

const Advantages = () => {
  return (
    <>
      <section className="section advantages-section" id="advantages">
        <h2>Наши преимущества</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <h3>Даем лучшие условия на рынке</h3>
            <p>Нет залога и депозита на старте</p>
            <p>Моментальный вывод, комиссия – 0,6%</p>
          </div>
          <div className="advantage-card">
            <h3>С нами выгодно</h3>
            <p>Нет штрафов за перепробег</p>
            <p>На время сложного ремонта выдаем подменный авто</p>
          </div>
          <div className="advantage-card">
            <h3>Работаем честно</h3>
            <p>Простой и понятный договор</p>
            <p>Нет скрытых платежей</p>
          </div>
          <div className="advantage-card">
            <h3>С нами комфортно</h3>
            <p>Поддержка 24/7 – отвечаем быстро и по делу</p>
            <p>
              Решаем споры с поддержкой Яндекса – мы отстаиваем позицию водителя
            </p>
          </div>
        </div>
        <h2 className="carH2">Автопарк</h2>
      </section>
    </>
  );
};

export default Advantages;
