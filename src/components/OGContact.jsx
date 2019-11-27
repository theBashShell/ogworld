import React from 'react';
import Zoom from 'react-reveal/Zoom';
import config from 'react-reveal/globals';
import { Icon, Form, Input, Button } from 'antd';
import { useFormik } from 'formik';

config({ ssrFadeout: true });

function OGContact() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleFormSubmit = () => {
    formik.submitForm();
  };

  return (
    <div id="contact-us">
      <h2 className="contact_heading">Contact Us</h2>
      <div className="centered">
        <div>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Item label='Email'>
              <Input
                name="email"
                type="email"
                size="large"
                {...formik.getFieldProps('email')}
              />
            </Form.Item>

            <Form.Item label='Name'>
              <Input
                name="name"
                type="text"
                size="large"
                {...formik.getFieldProps('name')}
              />
            </Form.Item>

            <Form.Item label='Message'>
              <Input.TextArea
                name="message"
                {...formik.getFieldProps('message')}
              />
            </Form.Item>
            <Form.Item>
              <Button size="large" onClick={handleFormSubmit}>
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default OGContact;
