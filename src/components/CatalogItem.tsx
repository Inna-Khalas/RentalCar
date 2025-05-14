import type { Car } from "../types/types";

interface Props {
  car: Car;
}

const CatalogItem = ({ car }: Props) => {
  const {
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
      <img src={img} alt={brand} />
      <h2>{`${brand} ${model} ${year}`}</h2>
      <p>{rentalPrice}</p>
      <p>{`${address} ${rentalCompany} ${type} ${mileage}`}</p>
    </div>
  );
};

export default CatalogItem;
