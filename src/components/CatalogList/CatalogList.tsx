import { useMemo } from "react";
import type { Car } from "../../types/cars-types";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/cars/selectors";
import s from "./CatalogList.module.css";

interface CatalogListProps {
  cars: Car[];
}

const CatalogList = ({ cars }: CatalogListProps) => {
  const error = useSelector(selectError);

  const catalogItems = useMemo(() => {
    return cars.map((car) => <CatalogItem key={car.id} car={car} />);
  }, [cars]);

  // if (cars.length === 0) {
  //   return <p>Nothing found for your request</p>;
  // }

  return (
    <div className={s.listWrapper}>
      {error && <p className={s.message}>{error}</p>}
      <div className={s.wrapper}>{catalogItems}</div>
    </div>
  );
};

export default CatalogList;
