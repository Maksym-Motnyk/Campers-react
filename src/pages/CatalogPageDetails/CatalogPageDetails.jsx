import axios from "axios";
import React, { Suspense } from "react";

import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import css from "./CatalogPageDetails.module.css";
import { CiStar } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
import FormDetails from "../../components/FormDetails/FormDetails";

export default function CatalogPageDetails() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  // console.log(camper);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const location = useLocation();
  // console.log(location);

  useEffect(() => {
    async function getCampersDetails() {
      try {
        const res = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        setCamper(res.data);
      } catch (error) {
        setError("Failed to load data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getCampersDetails();
  }, [id]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>{error}</p>;
  if (!camper) return <p>Кемпера не знайдено</p>;

  return (
    <div className={css.containerDetails}>
      <h3 className={css.title}>{camper.name}</h3>
      <div className={css.wrapperDetails}>
        <CiStar className={css.iconStar} />
        <p className={css.rating}>{camper.rating}</p>
        <p className={css.location}>{camper.location}</p>
      </div>
      <p className={css.price}>€{`${Number(camper.price).toFixed(2)}`}</p>
      {/* <div>
        {camper.gallery.map((original, index) => (
          <img key={index} src={original} alt={`camper-${index}`} />
        ))}
      </div> */}
      <div className={css.imageContainer}>
        <img className={css.imageDetails} src={camper.gallery[0]?.original} />
        <img className={css.imageDetails} src={camper.gallery[1]?.original} />
        <img className={css.imageDetails} src={camper.gallery[2]?.original} />
      </div>
      <p className={css.description}>{camper.description}</p>
      <ul className={css.detailsList}>
        <li>
          <NavLink className={css.detailsLink} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className={css.detailsLink} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr className={css.hr} />
      <div className={css.wrappDetails}>
        {/* <Suspence fallback={<div>Loading...</div>}> */}
        <Outlet />
        {/* </Suspence> */}
        <FormDetails />
      </div>
    </div>
  );
}
