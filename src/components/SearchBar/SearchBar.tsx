import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectBrands, selectFilter } from "../../redux/cars/selectors";
import type { AppDispatch } from "../../redux/store";
import { useMemo, useState } from "react";

import {
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  setPage,
  resetItems,
} from "../../redux/cars/slice";

import Button from "../Button/Button";
import s from "./SearchBar.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const price = [30, 40, 50, 60, 70, 80];

const SearchBar = () => {
  const [isBrand, setBrand] = useState(false);
  const [isPrice, setPrice] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const brands = useSelector(selectBrands);
  const filters = useSelector(selectFilter);

  const brandOptions = useMemo(() => {
    return brands.map((brand) => (
      <option key={brand} value={brand}>
        {brand}
      </option>
    ));
  }, [brands]);

  const priceOptions = useMemo(() => {
    return price.map((p) => (
      <option key={p} value={p}>
        {p}
      </option>
    ));
  }, []);

  const handleSearch = () => {
    dispatch(setPage(1));
    dispatch(resetItems());
  };
  return (
    <div className={s.wrapper}>
      <div className={s.column}>
        <label className={s.label}>Car brand</label>
        <div className={s.selectWrapper}>
          <select
            className={s.select}
            value={filters.brand}
            onFocus={() => setBrand(true)}
            onBlur={() => setBrand(false)}
            onChange={(e) => dispatch(brand(e.target.value))}
          >
            <option value="">Choose a brand</option>
            {brandOptions}
          </select>
          {isBrand ? (
            <ChevronUp className={s.icon} />
          ) : (
            <ChevronDown className={s.icon} />
          )}
        </div>
      </div>

      <div className={s.column}>
        <label className={s.label}>Price / 1 hour</label>
        <div className={s.selectWrapper}>
          <select
            className={s.select}
            value={filters.rentalPrice}
            onFocus={() => setPrice(true)}
            onBlur={() => setPrice(false)}
            onChange={(e) => dispatch(rentalPrice(e.target.value))}
          >
            <option value="">Choose a price</option>
            {priceOptions}
          </select>
          {isPrice ? (
            <ChevronUp className={s.icon} />
          ) : (
            <ChevronDown className={s.icon} />
          )}
        </div>
      </div>

      <div className={s.column}>
        <label className={s.label}>Car mileage / km</label>
        <div className={s.mileageWrapper}>
          <input
            className={s.inputLeft}
            type="number"
            placeholder="From"
            value={filters.minMileage}
            onChange={(e) => dispatch(minMileage(e.target.value))}
          />
          <input
            className={s.inputRight}
            type="number"
            placeholder="To"
            value={filters.maxMileage}
            onChange={(e) => dispatch(maxMileage(e.target.value))}
          />
        </div>
      </div>

      <div className={s.buttonWrapper}>
        <Button onClick={handleSearch} className={s.button}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
