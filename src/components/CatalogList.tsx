import React from "react";
import CatalogItem from "./CatalogItem";
import type { Car } from "../types/types";

interface CatalogListProps {
  cars: Car[];
  isLoading: boolean;
  error: string | null;
}

const CatalogList: React.FC<CatalogListProps> = ({
  cars,
  isLoading,
  error,
}) => {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cars.length === 0 ? (
        <p>Нема нічо</p>
      ) : (
        cars.map((car) => <CatalogItem key={car.id} car={car} />)
      )}
    </div>
  );
};

export default CatalogList;
