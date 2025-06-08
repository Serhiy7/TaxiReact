// VehicleFleet.jsx
import React, { useState } from "react";
import styles from "./VehicleFleet.module.sass";
import { cars } from "./hooks/carsData";
import RentModal from "./RentModal/RentModal";

const VehicleFleet = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.autopark} id="autopark">
        <h2 className={styles.sectionTitle}>Our Vehicle Fleet</h2>
        <div className={styles.autoparkGrid}>
          {cars.map((car) => (
            <div key={car.id} className={styles.carCard}>
              <div className={styles.carImage}>
                <img src={car.main_image} alt={car.name} />
              </div>
              <h3 className={styles.carTitle}>{car.name}</h3>
              <div className={styles.carVersion}>{car.version}</div>
              <div className={styles.carPrice}>
                from {car.rental_price} zł/week
              </div>
              <div className={styles.carDeposit}>
                Deposit: {car.deposit_price} zł
              </div>
              <div className={styles.carDescription}>{car.description}</div>
              <div className={styles.carDates}>
                <div>Added: {car.created_at}</div>
                <div>Last updated: {car.updated_at}</div>
              </div>
              <div className={styles.carActions}>
                <button
                  className={styles.btnRent}
                  onClick={() => openModal(car)}
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <RentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        carName={selectedCar ? selectedCar.name : ""}
      />
    </>
  );
};

export default VehicleFleet;
