import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import CatalogPageList from "../../components/CatalogPageList/CatalogPageList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  console.log(campers);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  // const [ownerFilter, setOwnerFilter] = useState("");
  // const [hasMore, sethasMore] = useState(true);

  const [searchParams, setSeearchParams] = useSearchParams();
  const ownerFilter = searchParams.get("owner") ?? "";

  const location = useLocation();
  console.log(location);

  const changeOwnerFilter = (newOwner) => {
    searchParams.set("owner", newOwner);
    setSeearchParams(searchParams);
  };

  useEffect(() => {
    async function getCampers() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
          {
            params: {
              page: 1,
              limit: 4,
            },
          }
        );
        setCampers(response.data.items);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getCampers();
  }, []);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const filteredCampers = useMemo(() => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(ownerFilter.toLowerCase())
    );
  }, [campers, ownerFilter]);

  return (
    <section className={css.sectionCatalog}>
      {loading && <p>Loading campers,please wait...</p>}
      {error && <p>There was an error,please reload this page!</p>}
      <div className={css.catalogPageContainer}>
        <SearchForm value={ownerFilter} onFilter={changeOwnerFilter} />
        <CatalogPageList campers={filteredCampers} />
      </div>
      {
        <button onClick={handleLoadMore} className={css.camperButton}>
          Load more
        </button>
      }
    </section>
  );
}
