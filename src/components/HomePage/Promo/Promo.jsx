import "./Promo.scss";
import { FaGift, FaClock, FaTachometerAlt } from "react-icons/fa";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-content">
        <h2>Special Offer</h2>
        <p>Only for new customers</p>
        <div className="promo-offer">
          <div className="offer-item">
            <FaGift className="offer-icon" />
            <div>
              <h3>Free Test Drive</h3>
              <p>7 days of free rental</p>
            </div>
          </div>
          <div className="offer-item">
            <FaClock className="offer-icon" />
            <div>
              <h3>Flexible Schedule</h3>
              <p>Work when it's convenient for you</p>
            </div>
          </div>
          <div className="offer-item">
            <FaTachometerAlt className="offer-icon" />
            <div>
              <h3>Unlimited Mileage</h3>
              <p>No additional fees</p>
            </div>
          </div>
        </div>
        <a href="#contact" className="btn-promo">
          Get the Offer
        </a>
      </div>
    </section>
  );
};

export default Promo;
