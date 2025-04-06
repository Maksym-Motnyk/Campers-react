import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import css from "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CatalogPageDetails from "../../pages/CatalogPageDetails/CatalogPageDetails";

export default function App() {
  return (
    <div className={css.container}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CatalogPageDetails />} />
      </Routes>
    </div>
  );
}
