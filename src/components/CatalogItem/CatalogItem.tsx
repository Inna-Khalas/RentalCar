import { Link } from "react-router-dom";
import type { Car } from "../../types/cars-types";
import Button from "../Button/Button";
import s from "./CatalogItem.module.css";

interface Props {
  car: Car;
}

const CatalogItem = ({ car }: Props) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;
  return (
    <div>
      <img src={img} alt={brand} width="276px" height="268px" />
      <h2>{`${brand} ${model} ${year}`}</h2>
      <p>${rentalPrice}</p>
      <p>{`${address} ${rentalCompany} ${type} ${mileage}`}</p>
      <Link to={`/catalog/${id}`} className={s.link}>
        <Button className={s.button}>Read more</Button>
      </Link>
    </div>
  );
};

export default CatalogItem;
