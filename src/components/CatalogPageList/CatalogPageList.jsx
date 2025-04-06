import css from "./CatalogPageList.module.css";
import { Link } from "react-router-dom";

export default function CatalogPageList({ campers }) {
  return (
    <div>
      <ul className={css.camperList}>
        {campers.map((camper) => (
          <li className={css.camperListItem} key={camper.id}>
            <img
              className={css.camperImg}
              src={camper.gallery[0]?.original}
              alt="First Image"
              width="292"
            />
            <div>
              <div className={css.camperWrap}>
                <h3 className={css.camperTitle}>{camper.name}</h3>
                <p className={css.camperPrice}>€{camper.price}</p>
              </div>
              <div className={css.camperWrapper}>
                <p className={css.camperRating}>{camper.rating}</p>
                <p className={css.camperLocation}>{camper.location}</p>
              </div>
              <p className={css.camperDescr}>{camper.description}</p>
              <div className={css.camperContainer}>
                <p className={css.camperTransmission}>{camper.transmission}</p>
                <p className={css.camperTransmission}>Petrol</p>
                <p className={css.camperTransmission}>Kitchen</p>
                <p className={css.camperTransmission}>AC</p>
              </div>
              <button className={css.camperBtn}>
                <Link to={`/catalog/${camper.id}`} className={css.navLink}>
                  Show more
                </Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
