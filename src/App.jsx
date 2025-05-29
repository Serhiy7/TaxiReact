import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import "./App.css";
import Hero from "./components/HomePage/Hero/Hero";
import Advantages from "./components/HomePage/Advantages/Advantages";
import VehicleFleet from "./components/VehicleFleet/VehicleFleet";
import VideosOnYouTube from "./components/VideosOnYouTube/VideosOnYouTube";
import NewsReviewsSection from "./components/NewsReviewsSection/NewsReviewsSection";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Hero />
        <Advantages />
        <VehicleFleet />
        <NewsReviewsSection />
        <VideosOnYouTube />
      </div>
      <Footer />
    </>
  );
}

export default App;
{
  /* <Route path="/" element={<Home />} /> */
}
