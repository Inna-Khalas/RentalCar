import { Route, Routes } from "react-router";
import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./components/Header/Header";
import { BeatLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CatalogPage = lazy(() => import("./pages/Catalog/CatalogPage"));
const CarDetails = lazy(() => import("./pages/CatalogDetails/CatalogDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Suspense
        fallback={
          <div className="loaderWrapper">
            <BeatLoader color="#3470ff" speedMultiplier={2} />
          </div>
        }
      >
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cars" element={<CatalogPage />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
