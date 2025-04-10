import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import css from "./Features.module.css";

export default function Features() {
  const [campers, setCampers] = useState([]);
    // console.log(campers);

  useEffect(() => {
    async function getFeatures() {
      try {
        const res = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        setCampers(res.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getFeatures();
  }, []);

  return (
    <div className={css.featuresContainer}>
      <ul className={css.featuresList}>
        <li className={css.featuresListItem}>Automatic</li>
        <li className={css.featuresListItem}>AC</li>
        <li className={css.featuresListItem}>Petrol</li>
        <li className={css.featuresListItem}>Kitchen</li>
        <li className={css.featuresListItem}>Radio</li>
      </ul>
      <h3 className={css.featuresTitle}>Vehicle details</h3>
      <hr className={css.hr} />
      <ul>
        {campers.slice(0, 1).map((camper) => (
          <li key={camper.id}>
            <ul className={css.campersList}>
              <li className={css.campersListItem}>
                <span>Form:</span> {camper.form}
              </li>

              <li className={css.campersListItem}>
                <span>Length:</span> {camper.length}
              </li>
              <li className={css.campersListItem}>
                <span>Width:</span> {camper.width}
              </li>
              <li className={css.campersListItem}>
                <span>Height:</span> {camper.height}
              </li>
              <li className={css.campersListItem}>
                <span>Tank:</span> {camper.tank}
              </li>
              <li className={css.campersListItem}>
                <span>Consumption: </span>
                {camper.consumption}
              </li>
            </ul>
          </li>
        ))}
      </ul>
      {/* <ul>
        {campers.slice(0, 1).map((camper) => (
          <li key={camper.id}>
            <strong>Form:</strong> {camper.form} <br />
            <strong>Width:</strong> {camper.width}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
