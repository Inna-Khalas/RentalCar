import { Route, Routes } from "react-router";
import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import { BeatLoader } from "react-spinners";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CatalogPage = lazy(() => import("./pages/Catalog/CatalogPage"));
const CarDetails = lazy(() => import("./pages/CatalogDetails/CatalogDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<BeatLoader color="#3470ff" speedMultiplier={2} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
