import React from "react";
import { FaCar, FaMoneyBillWave, FaClock } from "react-icons/fa";
import "./Tariffs.scss";

const Tariffs = () => {
  return (
    <section className="tariffs" id="tariffs">
      <div className="container">
        <h2 className="text-center">Our Tariffs</h2>
        <div className="tariffs-grid">
          <div className="tariff-card">
            <div className="tariff-icon">
              <FaCar />
            </div>
            <h3>Basic</h3>
            <p className="tariff-price">3,000 zł</p>
            <p className="tariff-description">Perfect for getting started</p>
            <ul className="tariff-features">
              <li>Economy class car</li>
              <li>Insurance</li>
              <li>24/7 Support</li>
            </ul>
            <button className="btn-tariff">Choose</button>
          </div>

          <div className="tariff-card">
            <div className="tariff-icon">
              <FaMoneyBillWave />
            </div>
            <h3>Standard</h3>
            <p className="tariff-price">5,000 zł</p>
            <p className="tariff-description">Optimal choice</p>
            <ul className="tariff-features">
              <li>Mid-range class car</li>
              <li>Full insurance</li>
              <li>24/7 Support</li>
              <li>Free maintenance</li>
            </ul>
            <button className="btn-tariff">Choose</button>
          </div>

          <div className="tariff-card">
            <div className="tariff-icon">
              <FaClock />
            </div>
            <h3>Premium</h3>
            <p className="tariff-price">8,000 zł</p>
            <p className="tariff-description">Maximum comfort</p>
            <ul className="tariff-features">
              <li>Premium class car</li>
              <li>Full insurance</li>
              <li>24/7 Support</li>
              <li>Free maintenance</li>
              <li>Additional services</li>
            </ul>
            <button className="btn-tariff">Choose</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
