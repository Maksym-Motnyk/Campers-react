import { Formik, Form, Field } from "formik";
import css from "./SearchForm.module.css";
// import { useSearchParams } from "react-router-dom";
import { FaTv } from "react-icons/fa";

export default function SearchForm({ value, onFilter }) {
  // const [searchParams, setSearchParams] = useSearchParams();


  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <label className={css.label} htmlFor="searchCamper">
            location
          </label>
          <Field
            value={value}
            onChange={(e) => onFilter(e.target.value)}
            id="searchCamper"
            name="searchCamper"
            type="text"
            placeholder="Kyiv, Ukraine"
            className={css.input}
          />
        </Form>
      </Formik>
      <p className={css.filters}>Filters</p>
      <h2 className={css.vehicle}>Vehicle equipment</h2>
      <ul className={css.vehicleList}>
        <li className={css.vehicleListItem}>AC</li>
        <li className={css.vehicleListItem}>Automatic</li>
        <li className={css.vehicleListItem}>Kitchen</li>
        <li className={css.vehicleListItem}>
          <FaTv className={css.iconTv} />
          TV
        </li>
        <li className={css.vehicleListItem}>Bathroom</li>
      </ul>
      <h2 className={css.vehicle}>Vehicle type</h2>
      <ul className={css.typeList}>
        <li className={css.vehicleListItem}>Van</li>
        <li className={css.vehicleListItem}>Fully Integrated</li>
        <li className={css.vehicleListItem}>Alcove</li>
      </ul>
      <button className={css.searchBtn}>Search</button>
    </div>
  );
}
