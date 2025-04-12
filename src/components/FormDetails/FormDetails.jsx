import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
// namespace import
import * as Yup from "yup";

import css from "./FormDetails.module.css";

const BookingSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Minimum 3 letters")
    .max(30, "Maximum 30 letters")
    .required("This field is required"),
  email: Yup.string().email("Unfaithful email").required("Enter email"),
  bookingDate: Yup.string().required("Specify rental dates"),
  comment: Yup.string().max(300, "Maximum 300 characters"),
});
export default function FormDetails() {
  const handleSubmit = (values, actions) => {
    console.log(handleSubmit, values);
    toast.success("The camper has been successfully booked! 🚐");
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          username: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="username"
            placeholder="Name*"
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
          <Field
            className={css.field}
            type="email"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <Field
            className={css.field}
            type="text"
            name="bookingDate"
            placeholder="Booking date*"
          />
          <ErrorMessage
            className={css.error}
            name="bookingDate"
            component="span"
          />
          <Field
            className={css.textarea}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
          <button type="submit" className={css.formBtn}>
            Send
          </button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}
