import React from "react";
import { Link } from "react-router-dom";
import { FaCar, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Car Rental in Warsaw</h1>
        <p>
          Earn from <span className="highlight">6,000</span> to{" "}
          <span className="highlight">8,000</span> zł <br /> per month working
          in a taxi
        </p>
        <div className="hero-buttons">
          <Link to="/cars" className="btn-hero primary">
            <FaCar /> Choose a Car
          </Link>
          <Link to="/tariffs" className="btn-hero secondary">
            <FaMoneyBillWave /> Tariffs
          </Link>
        </div>
        <div className="hero-features">
          <div className="feature">
            <FaCalendarAlt />
            <span>Flexible rental terms</span>
          </div>
          <div className="feature">
            <FaCar />
            <span>New cars</span>
          </div>
          <div className="feature">
            <FaMoneyBillWave />
            <span>High profit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
