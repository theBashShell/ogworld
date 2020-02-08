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
      email: "",
      message: "",
      onSubmit: async values => {
        console.log(values);
      }
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className="ct-form"> 
        <label htmlFor="name">Name</label>
        <TextField
          name="name"
          className="ct-input"
          placeholder="Jane Doe"
          {...formik.getFieldProps("name")}
        />

        <label htmlFor="email">Email</label>
        <TextField
          name="email"
          type="email"
          className="ct-input"
          placeholder="example@example.com"
          {...formik.getFieldProps("email")}
        />

        <label htmlFor="message">Message</label>
        <TextArea
          name="message"
          value=""
          resize="vertical"
          placeholder="What's on your mind?"
          {...formik.getFieldProps("message")}
        />

        <Button type="submit" appearance="primary">
          Submit
        </Button> 
    </form>
  );
};

const OGContact = () => {
  return (
    <section id='contact' className="contact centered">
      <div class="sec-title ct-title">Contact Us</div>
      
        <ContactForm />
    
    </section>
  );
};

export default OGContact;
