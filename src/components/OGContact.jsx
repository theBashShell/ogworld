import React from 'react';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import { Icon, Form, Input, message } from 'antd';
import { useFormik } from 'formik';

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
      console.log(values);
      formik.resetForm();
      // send values
      message.destroy();
      message.success({ content: 'message submitted', duration: 6 });
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
                rows={6}
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
        </div>
      </div>
    </div>
  );
}

export default OGContact;
