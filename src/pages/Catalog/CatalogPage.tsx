import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";
import { useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { selectCatalog } from "../../redux/cars/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, page, limit, totalCars, totalPages } =
    useSelector(selectCatalog);
  useEffect(() => {
    dispatch(fetchCars({ page, limit }));
  }, [page, limit, dispatch]);

  return (
    <div>
      <CatalogList cars={items} />
      {totalCars} {totalPages}
    </div>
  );
};

export default CatalogPage;
