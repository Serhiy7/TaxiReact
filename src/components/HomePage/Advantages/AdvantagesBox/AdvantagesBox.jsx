import styles from "./AdvantagesBox.module.scss";

const AdvantagesBox = () => {
  return (
    <div className={styles.advantagesGrid}>
      <div className={styles.advantageCard}>
        <h3>We offer the best conditions on the market</h3>
        <p>No collateral or deposit required at the start</p>
        <p>Instant withdrawals with a 0.6% commission</p>
      </div>
      <div className={styles.advantageCard}>
        <h3>It's profitable with us</h3>
        <p>No penalties for exceeding mileage</p>
        <p>We provide a replacement car during complex repairs</p>
      </div>
      <div className={styles.advantageCard}>
        <h3>We work honestly</h3>
        <p>Simple and clear contract</p>
        <p>No hidden fees</p>
      </div>
      <div className={styles.advantageCard}>
        <h3>It's comfortable with us</h3>
        <p>24/7 support – we respond quickly and to the point</p>
        <p>
          We resolve disputes with Yandex support – we stand up for the driver's
          position
        </p>
      </div>
    </div>
  );
};

export default AdvantagesBox;
