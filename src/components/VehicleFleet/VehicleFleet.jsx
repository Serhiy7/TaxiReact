import styles from "./VehicleFleet.module.sass";

const VehicleFleet = () => {
  // Имитация данных об автомобилях
  const cars = [
    {
      id: 1,
      main_image: "https://via.placeholder.com/300x180?text=Toyota+Corolla",
      name: "Toyota Corolla",
      version: "1.6 Hybrid",
      rental_price: 1200,
      deposit_price: 5000,
      description:
        "Экономичный гибрид с низким расходом топлива. Идеален для работы в городе.",
      created_at: "15.05.2025",
      updated_at: "20.05.2025",
    },
    {
      id: 2,
      main_image: "https://via.placeholder.com/300x180?text=Skoda+Octavia",
      name: "Skoda Octavia",
      version: "1.4 TSI",
      rental_price: 1400,
      deposit_price: 6000,
      description:
        "Просторный салон и комфортная подвеска. Отличный выбор для работы.",
      created_at: "10.05.2025",
      updated_at: "18.05.2025",
    },
    {
      id: 3,
      main_image: "https://via.placeholder.com/300x180?text=Volkswagen+Golf",
      name: "Volkswagen Golf",
      version: "1.5 TSI",
      rental_price: 1300,
      deposit_price: 5500,
      description: "Надежный немецкий автомобиль с отличной динамикой.",
      created_at: "12.05.2025",
      updated_at: "19.05.2025",
    },
  ];


  return (
    <>
      <section className={styles.autopark} id="autopark">
        <h2 className={styles.sectionTitle}>Наш автопарк</h2>
        <div className={styles.autoparkGrid}>
          {cars.map((car) => (
            <div key={car.id} className={styles.carCard}>
              <div className={styles.carImage}>
                <img src={car.main_image} alt={car.name} />
              </div>
              <h3 className={styles.carTitle}>{car.name}</h3>
              <div className={styles.carVersion}>{car.version}</div>
              <div className={styles.carPrice}>
                от {car.rental_price} злотых/неделя
              </div>
              <div className={styles.carDeposit}>
                Залог: {car.deposit_price} злотых
              </div>
              <div className={styles.carDescription}>{car.description}</div>
              <div className={styles.carDates}>
                <div>Дата добавления: {car.created_at}</div>
                <div>Последнее обновление: {car.updated_at}</div>
              </div>
              <div className={styles.carActions}>
                <button className={styles.btnRent}>Арендовать</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VehicleFleet;
