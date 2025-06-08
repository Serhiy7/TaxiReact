import "./Promo.css";
import { FaGift, FaClock, FaTachometerAlt } from 'react-icons/fa';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-content">
        <h2>Специальное предложение</h2>
        <p>Только для новых клиентов</p>
        <div className="promo-offer">
          <div className="offer-item">
            <FaGift className="offer-icon" />
            <div>
              <h3>Бесплатный тест-драйв</h3>
              <p>7 дней аренды бесплатно</p>
            </div>
          </div>
          <div className="offer-item">
            <FaClock className="offer-icon" />
            <div>
              <h3>Гибкий график</h3>
              <p>Работайте когда удобно</p>
            </div>
          </div>
          <div className="offer-item">
            <FaTachometerAlt className="offer-icon" />
            <div>
              <h3>Неограниченный пробег</h3>
              <p>Без дополнительных платежей</p>
            </div>
          </div>
        </div>
        <a href="#contact" className="btn-promo">
          Получить предложение
        </a>
      </div>
    </section>
  );
};

export default Promo;
