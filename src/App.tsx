import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import CatalogPage from "./pages/Catalog/CatalogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route></Route>
    </Routes>
  );
}

export default App;
