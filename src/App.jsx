import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NewsReviews from "./Pages/NewsReviews/NewsReviews";
import Vehicle from "./Pages/Vehicle/Vehicle";
import Videos from "./Pages/Videos/Videos";
import AllNews from "./components/NewsReviewsSection/News/AllNews/AllNews";
import AllReviews from "./components/NewsReviewsSection/Reviews/AllReviews/AllReviews";
import NewsDetail from "./components/NewsReviewsSection/News/NewsDetail/NewsDetail"; // Добавляем импорт
import ReviewDetail from "./components/NewsReviewsSection/Reviews/AllReviews/AllReviews"; // Добавляем импорт

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
          <Route path="all-news" element={<AllNews />} />
          <Route path="all-reviews" element={<AllReviews />} />
          {/* Добавляем новые маршруты */}
          <Route path="news-detail" element={<NewsDetail />} />
          <Route path="review-detail" element={<ReviewDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
