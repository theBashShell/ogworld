import React from 'react';
import ContactForm from './ContactForm';
// import contact from '../static/images/contact.svg';

function ReachUs() {
  return (
    <>
      <div className="reach_heading">
        <h2>Contact Us</h2>
      </div>
      <section className="reach_us">
        <ContactForm />
      </section>
    </>
  );
}

export default ReachUs;
