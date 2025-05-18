import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect, useMemo, useRef } from "react";

import { fetchCarsDetails } from "../../redux/cars/operations";
import type { AppDispatch } from "../../redux/store";
import { selectCar } from "../../redux/cars/selectors";
import BookingForm from "../../components/BookingForm/BookingForm";
import s from "./CatalogDetails.module.css";

import {
  FaMapMarkerAlt,
  FaRoad,
  FaGasPump,
  FaCogs,
  FaCalendarAlt,
  FaCarSide,
} from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const CarDetails = () => {
  const carDetails = useSelector(selectCar);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  const goBackRef = useRef(location.state?.from ?? "/cars");

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

  const [city, country] = address.split(", ").slice(1);
  const formatter = new Intl.NumberFormat("ru-RU").format(mileage);
  return (
    <>
      <Link to={goBackRef.current} className={s.goBackLink}>
        Повернутися назад
      </Link>
      <div className={s.container}>
        <div className={s.leftColumn}>
          <img src={img} alt={brand} className={s.image} />

          <BookingForm />
        </div>

        <div className={s.rightColumn}>
          <h1 className={s.title}>
            {brand} {model}
          </h1>

          <p className={s.locationMileage}>
            <FaMapMarkerAlt /> {city}, {country} &nbsp; | &nbsp; <FaRoad />{" "}
            Mileage: {formatter} km
          </p>

          <p className={s.price}>${rentalPrice}</p>
          <p className={s.description}>{description}</p>

          <div className={s.listWrapper}>
            <div>
              <h2 className={s.sectionTitle}>Rental Conditions:</h2>
              <ul className={s.list}>{conditions}</ul>
            </div>
            <div>
              <h2 className={s.sectionTitle}>Car Specifications:</h2>
              <ul className={s.list}>
                <li>
                  <FaCalendarAlt /> Year: {year}
                </li>
                <li>
                  <FaCarSide /> Type: {type}
                </li>
                <li>
                  <FaGasPump /> Fuel Consumption: {fuelConsumption}
                </li>
                <li>
                  <FaCogs /> Engine Size: {engineSize}
                </li>
              </ul>
            </div>
            <div>
              <h2 className={s.sectionTitle}>
                Accessories and functionalities:
              </h2>
              <ul className={s.list}>{functionals}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
