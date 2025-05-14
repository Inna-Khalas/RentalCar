import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList";
import Header from "../../components/Header";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import { useSelector } from "react-redux";
import { selectCatalog } from "../../redux/selectors";
import type { AppDispatch } from "../../redux/store";

const CatalogPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, page, limit, totalCars, totalPages, isLoading, error } =
    useSelector(selectCatalog);

  console.table(items);

  useEffect(() => {
    dispatch(fetchCars({ page, limit }));
  }, [page, limit, dispatch]);

  return (
    <div>
      <Header />
      <CatalogList cars={items} isLoading={isLoading} error={error} />
      {totalCars} {totalPages}
    </div>
  );
};

export default CatalogPage;
