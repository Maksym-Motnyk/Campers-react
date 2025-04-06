import { useEffect, useState } from "react";
import axios from "axios";
import CatalogPageList from "../../components/CatalogPageList/CatalogPageList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  // const [hasMore, sethasMore] = useState(true);

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
  console.log(campers);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={css.sectionCatalog}>
      {loading && <p>Loading campers,please wait...</p>}
      {error && <p>There was an error,please reload this page!</p>}
      <div className={css.catalogPageContainer}>
        <SearchForm />
        {campers.length > 0 && <CatalogPageList campers={campers} />}
      </div>
      {
        <button onClick={handleLoadMore} className={css.camperButton}>
          Load more
        </button>
      }
    </section>
  );
}
