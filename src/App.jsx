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
      <main className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="news" element={<NewsReviews />} />
          <Route path="cars" element={<Vehicle />} />
          <Route path="videos" element={<Videos />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
