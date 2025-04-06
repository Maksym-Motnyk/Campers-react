import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./CatalogPageDetails.module.css";

export default function CatalogPageDetails() {
  const { id } = useParams();
  console.log(id);
  const [camper, setCamper] = useState(null);
  console.log(camper);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <p>{camper.rating}</p>
      <p>{camper.location}</p>
      <p>€{camper.price}</p>
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
    </div>
  );
}
