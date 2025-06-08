import React from "react";
import { FaCar, FaMoneyBillWave, FaClock } from "react-icons/fa";
import "./Tariffs.scss";

const Tariffs = () => {
  return (
    <section className="tariffs" id="tariffs">
      <div className="container">
        <h2 className="text-center">Наши Тарифы</h2>
        <div className="tariffs-grid">
          <div className="tariff-card">
            <div className="tariff-icon">
              <FaCar />
            </div>
            <h3>Базовый</h3>
            <p className="tariff-price">3 000 zł</p>
            <p className="tariff-description">Идеально для начала работы</p>
            <ul className="tariff-features">
              <li>Автомобиль эконом-класса</li>
              <li>Страховка</li>
              <li>Поддержка 24/7</li>
            </ul>
            <button className="btn-tariff">Выбрать</button>
          </div>

          <div className="tariff-card">
            <div className="tariff-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Стандарт</h3>
            <p className="tariff-price">5 000 zł</p>
            <p className="tariff-description">Оптимальный выбор</p>
            <ul className="tariff-features">
              <li>Автомобиль среднего класса</li>
              <li>Полная страховка</li>
              <li>Поддержка 24/7</li>
              <li>Бесплатное обслуживание</li>
            </ul>
            <button className="btn-tariff">Выбрать</button>
          </div>

          <div className="tariff-card">
            <div className="tariff-icon">
              <FaClock />
            </div>
            <h3>Премиум</h3>
            <p className="tariff-price">8 000 zł</p>
            <p className="tariff-description">Максимальный комфорт</p>
            <ul className="tariff-features">
              <li>Автомобиль премиум-класса</li>
              <li>Полная страховка</li>
              <li>Поддержка 24/7</li>
              <li>Бесплатное обслуживание</li>
              <li>Дополнительные услуги</li>
            </ul>
            <button className="btn-tariff">Выбрать</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
