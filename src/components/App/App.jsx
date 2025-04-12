import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import css from "./App.module.css";
// import HomePage from "../../pages/HomePage/HomePage";
// import CatalogPage from "../../pages/CatalogPage/CatalogPage";
// import CatalogPageDetails from "../../pages/CatalogPageDetails/CatalogPageDetails";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";

const HomePage = React.lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = React.lazy(() =>
  import("../../pages/CatalogPage/CatalogPage")
);
const CatalogPageDetails = React.lazy(() =>
  import("../../pages/CatalogPageDetails/CatalogPageDetails")
);
const NotFoundPage = React.lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const Features = React.lazy(() => import("../Features/Features"));
const Reviews = React.lazy(() => import("../Reviews/Reviews"));

export default function App() {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<div>Loading page code...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogPageDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
