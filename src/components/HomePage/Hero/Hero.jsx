import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Аренда авто Варшава</h1>
          <p>
            Зарабатывайте от
            <span className="highlight"> 6 000 </span>
            до
            <span className="highlight"> 8 000 </span>
            zl <br /> в месяц на работе в такси
          </p>
          <a href="#autopark" className="btn-hero">
            Выбрать автомобиль
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
