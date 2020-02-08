import React from "react";
import "./ogcontact.css";
import { useFormik } from "formik";
import Button from "@atlaskit/button";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      onSubmit: async values => {
        console.log(values);
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className="ct-form">
      <div className="ctn-field">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="ct-input"
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
          {...formik.getFieldProps("message")}
        />
      </div>
      <Button type="submit" appearance="primary">
        Submit
      </Button>
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
