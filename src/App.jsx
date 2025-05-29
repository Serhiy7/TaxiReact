import { Header, Footer } from "./components/Layout";
import "./App.css";
import Hero from "./components/HomePage/Hero/Hero";
import Advantages from "./components/HomePage/Advantages/Advantages";
import VehicleFleet from "./components/VehicleFleet/VehicleFleet";
import VideosOnYouTube from "./components/VideosOnYouTube/VideosOnYouTube";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <VehicleFleet />
      <VideosOnYouTube />
      <Footer />
    </>
  );
}

export default App;
