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

  const [city, country] = address.split(", ").slice(1);
  const formatter = new Intl.NumberFormat("ru-RU").format(mileage);

  return (
    <div className={s.wrapper}>
      <Link to={`/cars/${id}`} className={s.link}>
        <img
          src={img}
          alt={brand}
          width="276px"
          height="268px"
          className={s.image}
        />
        <div className={s.textWrapper}>
          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              {brand} <span className={s.span}>{model}</span> {year}
            </h2>
            <p className={s.price}>${rentalPrice}</p>
          </div>
          <p className={s.text}>{`${city} | ${country} | ${rentalCompany}`}</p>{" "}
          <p className={s.text}>{`${type} | ${formatter} km`}</p>
        </div>
        <Button className={s.button}>Read more</Button>
      </Link>
    </div>
  );
};

export default CatalogItem;
