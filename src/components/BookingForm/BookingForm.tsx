/* eslint-disable */

import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Button/Button";
import s from "./BookingForm.module.css";
import toast from "react-hot-toast";

const DateField = ({ ...props }) => {
  const [{ value }, , { setValue }] = useField(props);

  return (
    <DatePicker
      selected={value}
      onChange={(date) => setValue(date)}
      dateFormat="yyyy-MM-dd"
      placeholderText="Booking date"
      className={`${s.input} ${s.dateInput}`}
    />
  );
};

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    date: Yup.date().required("Date is required"),
    comment: Yup.string(),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: any) => {
    console.log(values);

    toast.success("Your car has been successfully booked!", {
      style: {
        border: "1px solid #3470ff",
        padding: "16px",
        color: "#3470ff",
      },
      iconTheme: {
        primary: "#3470ff",
        secondary: "#FFFAEE",
      },
    });
    resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <h2 className={s.title}>Book your car now</h2>
      <p className={s.subText}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <Field name="name" placeholder="Name*" className={s.input} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className={s.input}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <DateField name="date" />
            <ErrorMessage name="date" component="div" className={s.error} />
          </label>

          <label className={s.label}>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={s.textarea}
            />
          </label>
          <div className={s.buttonWrapper}>
            <Button type="submit" className={s.button}>
              Send
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
