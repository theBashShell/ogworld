import React from "react";
import "./ogcontact.css";
import { useFormik } from "formik";

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "required";
  }

  if (!values.message) {
    errors.message = "required";
  }

  if (!values.email) {
    errors.email = "required";
  }
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(values.email)) {
    errors.email = "invalid email";
  }

  return errors;
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate,
    onSubmit: values => {
      console.log(values);
    }
  });

  const handleFormSubmit = async event => {
    event.preventDefault();
    formik
      .submitForm()
      .then(() => {
        formik.resetForm();
      })
      .catch(err => console.error(err));
  };

  return (
    <form className="ct-form" onSubmit={formik.handleSubmit}>
      <div className="ctn-field">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className={`ct-input ${
            formik.touched.name && formik.errors.name ? "ct-err" : ""
          }`}
          placeholder="Jane Doe"
          {...formik.getFieldProps("name")}
        />
      </div>
      <div className="ctn-field">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          className="ct-input"
          placeholder="example@example.com"
          className={`ct-input ${
            formik.touched.email && formik.errors.email ? "ct-err" : ""
          }`}
          {...formik.getFieldProps("email")}
        />
      </div>
      <div className="ctn-field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value=""
          resize="vertical"
          rows={8}
          className="ct-input"
          placeholder="What's on your mind?"
          className={`ct-input ${
            formik.touched.message && formik.errors.message ? "ct-err" : ""
          }`}
          {...formik.getFieldProps("message")}
        />
      </div>
      <input
        className="ct-input ct-sb"
        type="submit"
        value="Submit"
        onClick={handleFormSubmit}
      />
    </form>
  );
};

const OGContact = () => {
  return (
    <section id="contact" className="contact centered">
      <div className="sec-title ct-title">Contact Us</div>
      <ContactForm />
    </section>
  );
};

export default OGContact;
