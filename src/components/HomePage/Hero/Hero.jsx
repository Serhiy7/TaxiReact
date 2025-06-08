import "./Hero.css";
import { FaCar, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Аренда авто в Варшаве</h1>
          <p>
            Зарабатывайте от <span className="highlight">6 000</span> до <span className="highlight">8 000</span> zl <br /> в месяц на работе в такси
          </p>
          <div className="hero-buttons">
            <a href="#autopark" className="btn-hero primary">
              <FaCar /> Выбрать автомобиль
            </a>
            <a href="#tariffs" className="btn-hero secondary">
              <FaMoneyBillWave /> Тарифы
            </a>
          </div>
          <div className="hero-features">
            <div className="feature">
              <FaCalendarAlt />
              <span>Гибкие условия аренды</span>
            </div>
            <div className="feature">
              <FaCar />
              <span>Новые автомобили</span>
            </div>
            <div className="feature">
              <FaMoneyBillWave />
              <span>Высокая прибыль</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
