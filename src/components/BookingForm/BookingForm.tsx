import { Formik, Form, Field } from "formik";
import Button from "../Button/Button";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = () => {};
  return (
    <div>
      <h1>Book your car now</h1>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <Field name="name" placeholder="Name*" />
          </label>
          <label>
            <Field name="email" type="email" placeholder="Email*" />
          </label>
          <label>
            <Field name="date" type="date" placeholder="Booking date" />
          </label>
          <label>
            <Field as="textarea" name="comment" placeholder="Comment" />
          </label>
          <Button>Send</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
