import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NewsReviews from "./Pages/NewsReviews/NewsReviews";
import Vehicle from "./Pages/Vehicle/Vehicle";
import Videos from "./Pages/Videos/Videos";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <HomePage />
        <NewsReviews />
        <Vehicle />
        <Videos />
      </div>
      <Footer />
    </>
  );
}

export default App;
{
  /* <Route path="/" element={<Home />} /> */
}
