import { Formik, Form, Field } from "formik";
import css from "./FormDetails.module.css";
export default function FormDetails() {
  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik>
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="name*"
          />
          <Field
            className={css.field}
            type="email"
            name="useremail"
            placeholder="email*"
          />
          <Field
            className={css.field}
            type="date"
            name="bookingDate"
            placeholder="Booking date*"
          />
          <Field
            className={css.textarea}
            as="textarea"
            name="coment"
            placeholder="coment"
          />
          <button className={css.formBtn}>Send</button>
        </Form>
      </Formik>
    </div>
  );
}
