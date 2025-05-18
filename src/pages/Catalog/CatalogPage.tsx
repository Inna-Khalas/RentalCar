import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList";
import { useEffect } from "react";
import { fetchBrands, fetchCars } from "../../redux/cars/operations";
import { useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { selectCatalog } from "../../redux/cars/selectors";
import SearchBar from "../../components/SearchBar/SearchBar";
import LoadMore from "../../components/LoadMore/LoadMore";
import { setPage } from "../../redux/cars/slice";

const CatalogPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { items, page, limit, totalPages, filters } =
    useSelector(selectCatalog);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars({ page, limit, ...filters }));
  }, [page, limit, filters, dispatch]);

  const loadMoreHandler = () => {
    if (page < totalPages) dispatch(setPage(page + 1));
  };

  const hasMore = page < totalPages;

  return (
    <div>
      <SearchBar />
      <CatalogList cars={items} />
      <LoadMore onClick={loadMoreHandler} hasMore={hasMore} />
    </div>
  );
};

export default CatalogPage;
