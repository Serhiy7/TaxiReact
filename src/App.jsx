import { Header, Footer } from "./components/Layout";
import "./App.css";
import Hero from "./components/HomePage/Hero/Hero";
import Advantages from "./components/HomePage/Advantages/Advantages";
import VehicleFleet from "./components/VehicleFleet/VehicleFleet";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <VehicleFleet />
      <Footer />
    </>
  );
}

export default App;
