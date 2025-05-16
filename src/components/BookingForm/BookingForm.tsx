import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Button/Button";
import iziToast from "izitoast";

const DateField = ({ ...props }) => {
  const [{ value }, , { setValue }] = useField(props);

  return (
    <DatePicker
      selected={value}
      onChange={(date) => setValue(date)}
      dateFormat="yyyy-MM-dd"
      placeholderText="Booking date"
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

  const handleSubmit = (values: typeof initialValues, { resetForm }) => {
    console.log(values);

    iziToast.success({
      title: "Success",
      message: "Your car has been successfully booked!",
      position: "topRight",
      timeout: 2000,
      progressBar: true,
    });
    resetForm();
  };
  return (
    <div>
      <h1>Book your car now</h1>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <Field name="name" placeholder="Name*" />
            <ErrorMessage name="name" component="div" className="error" />
          </label>
          <label>
            <Field name="email" type="email" placeholder="Email*" />
            <ErrorMessage name="email" component="div" className="error" />
          </label>
          <label>
            <DateField name="date" />
            <ErrorMessage name="date" component="div" className="error" />
          </label>
          <label>
            <Field as="textarea" name="comment" placeholder="Comment" />
          </label>
          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
