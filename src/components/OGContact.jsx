import React from 'react';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';
import { Icon, Form, Input, message } from 'antd';
import { useFormik } from 'formik';
import { sendEmail } from '../util/sendEmail';

config({ ssrFadeout: true });

function OGContact() {
  const validate = (values) => {
    const errors = {};

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.email) errors.email = 'required';
    else if (!re.test(values.email)) errors.email = 'invalid email';

    if (!values.name) errors.name = 'required';
    if (!values.message) errors.message = 'required';

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: (values) => {
      sendEmail(values);
      formik.resetForm();
    },
    validate,
  });

  const ErrorMessage = ({ touched, error }) => {
    return (
      <React.Fragment>
        {touched && error ? (
          <small className="error_message">{error}</small>
        ) : (
          <small />
        )}
      </React.Fragment>
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formik.submitForm();
  };

  return (
    <div id="reach_us">
      <h2 className="contact_heading">Contact Us</h2>
      <div className="centered">
        <div className="og-form">
          <Reveal duration={5000}>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Item label="Email">
                <Input
                  name="email"
                  type="email"
                  size="large"
                  {...formik.getFieldProps('email')}
                />
                <ErrorMessage
                  touched={formik.touched.email}
                  error={formik.errors.email}
                />
              </Form.Item>

              <Form.Item label="Name">
                <Input
                  name="name"
                  type="text"
                  size="large"
                  {...formik.getFieldProps('name')}
                />
                <ErrorMessage
                  touched={formik.touched.name}
                  error={formik.errors.name}
                />
              </Form.Item>

              <Form.Item label="Message">
                <Input.TextArea
                  name="message"
                  rows={9}
                  {...formik.getFieldProps('message')}
                />
                <ErrorMessage
                  touched={formik.touched.message}
                  error={formik.errors.message}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  type="submit"
                  value="Send"
                  size="large"
                  className="form-send"
                  onClick={handleFormSubmit}
                />
              </Form.Item>
            </Form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default OGContact;
