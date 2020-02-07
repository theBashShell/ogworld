import React from "react";
import "./ogcontact.css";
import { useFormik } from "formik";
import Button from "@atlaskit/button";
import TextArea from "@atlaskit/textarea";
import TextField from "@atlaskit/textfield";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "example@example.com",
      message: "",
      onSubmit: async values => {
        console.log(values);
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <TextField name="name" width="large" />

      <label htmlFor="email">Email</label>
      <TextField name="email" width="large" type="email" />

      <label htmlFor="message">Message</label>
      <TextArea name="message" width="large" value="" resize="vertical" />
      
      <Button type='submit' appearance='primary'>Submit</Button>
    </form>
  );
};

const OGContact = () => {
  return (
    <section className="contact centered">
      contact
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default OGContact;
