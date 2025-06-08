import "./Advantages.scss";
import AdvaH2 from "./AdvantagesH2/AdvantagesH2";
import AdvantagesBox from "./AdvantagesBox/AdvantagesBox";

const Advantages = () => {
  return (
    <>
      <section className="section advantages-section" id="advantages">
        <AdvaH2 />
        <AdvantagesBox />
      </section>
    </>
  );
};

export default Advantages;
