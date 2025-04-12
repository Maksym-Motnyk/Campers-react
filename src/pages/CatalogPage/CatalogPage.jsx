import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import CatalogPageList from "../../components/CatalogPageList/CatalogPageList";
import SearchForm from "../../components/SearchForm/SearchForm";
import css from "./CatalogPage.module.css";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  console.log(campers);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSeearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // для перевірки, чи ще є сторінки
  const ownerFilter = searchParams.get("owner") ?? "";

  const location = useLocation();
  console.log(location);

  const changeOwnerFilter = (newOwner) => {
    searchParams.set("owner", newOwner);
    setSeearchParams(searchParams);
  };
  const filteredCampers = useMemo(() => {
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(ownerFilter.toLowerCase())
    );
  }, [campers, ownerFilter]);

  // useEffect(() => {
  //   async function getCampers() {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
  //         {
  //           params: {
  //             page: 1,
  //             limit: 4,
  //           },
  //         }
  //       );
  //       setCampers(response.data.items);
  //     } catch (error) {
  //       setError(true);
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getCampers();
  // }, []);

  // 🔹 Початкове завантаження
  useEffect(() => {
    async function getInitialCampers() {
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
        const initialCampers = response.data.items || [];
        setCampers(initialCampers);
        if (initialCampers.length < 4) {
          setHasMore(false);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getInitialCampers();
  }, []);

  // 🔹 Дозавантаження (тільки при натисканні)
  const handleLoadMore = async () => {
    const nextPage = page + 1;
    try {
      setLoading(true);
      const response = await axios.get(
        "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
        {
          params: {
            page: nextPage,
            limit: 4,
          },
        }
      );
      const newCampers = response.data.items || [];
      setCampers((prev) => [...prev, ...newCampers]);
      setPage(nextPage);
      if (newCampers.length < 4) {
        setHasMore(false);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={css.sectionCatalog}>
      {loading && <p>Loading campers,please wait...</p>}
      {error && <p>There was an error,please reload this page!</p>}
      <div className={css.catalogPageContainer}>
        <SearchForm value={ownerFilter} onFilter={changeOwnerFilter} />
        <div>
          <CatalogPageList campers={filteredCampers} />
          {!loading && hasMore && <LoadMoreBtn onClick={handleLoadMore} />}
        </div>
      </div>
    </section>
  );
}
