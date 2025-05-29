import "./Advantages.css";
import AdvaH2 from "./AdvantagesH2/AdvantagesH2";
import AdvantagesBox from "./AdvantagesBox/AdvantagesBox";

const Advantages = () => {
  return (
    <>
      <section className="section advantages-section" id="advantages">
        <AdvaH2 />
        <AdvantagesBox />
        <h2 className="carH2">Автопарк</h2>
      </section>
    </>
  );
};

export default Advantages;
