import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import css from "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CatalogPageDetails from "../../pages/CatalogPageDetails/CatalogPageDetails";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

export default function App() {
  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CatalogPageDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
