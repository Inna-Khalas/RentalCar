import { useMemo } from "react";
import type { Car } from "../../types/cars-types";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/cars/selectors";

interface CatalogListProps {
  cars: Car[];
}

const CatalogList = ({ cars }: CatalogListProps) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const catalogItems = useMemo(() => {
    if (cars.length === 0) {
      return <p>Nothing found for your request</p>;
    }
    return cars.map((car) => <CatalogItem key={car.id} car={car} />);
  }, [cars]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {catalogItems}
    </div>
  );
};

export default CatalogList;
