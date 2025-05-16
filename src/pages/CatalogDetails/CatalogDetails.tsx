import { useSelector } from "react-redux";
import { selectCar } from "../../redux/cars/selectors";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchCarsDetails } from "../../redux/cars/operations";
import type { AppDispatch } from "../../redux/store";
import BookingForm from "../../components/BookingForm/BookingForm";

const CarDetails = () => {
  const carDetails = useSelector(selectCar);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(fetchCarsDetails(id));
    }
  }, [id, dispatch]);

  const conditions = useMemo(() => {
    const rentalConditions = carDetails?.rentalConditions ?? [];

    return rentalConditions.map((c, index) => <li key={index}>{c}</li>);
  }, [carDetails?.rentalConditions]);

  const functionals = useMemo(() => {
    const functionalities = carDetails?.functionalities ?? [];
    return functionalities.map((f, index) => <li key={index}>{f}</li>);
  }, [carDetails?.functionalities]);

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  const {
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    type,
    mileage,
    engineSize,
    fuelConsumption,
    description,
  } = carDetails;

  return (
    <div>
      <img src={img} alt={brand} height="512px" width="640px" />
      <h1>{`${brand} ${model} ${year}`}</h1>
      <p>{address}</p>
      <p>Mileage: {mileage}</p>
      <p>${rentalPrice}</p>
      <p>{description}</p>

      <h2>Rental Conditions:</h2>
      <ul>{conditions}</ul>

      <h2>Car Specifications:</h2>
      <ul>
        <li>Year: {year}</li>
        <li>Type: {type}</li>
        <li>Fuel Consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </ul>

      <h2>Accessories and functionalities:</h2>
      <ul>{functionals}</ul>
      <BookingForm />
    </div>
  );
};

export default CarDetails;
