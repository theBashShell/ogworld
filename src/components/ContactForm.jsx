import React, {useState} from 'react';

function ContactForm() {
  return (
    <form className="contact_form" method="POST" action="">
      <label className="input_group">
        <span className="input_tag">Email</span>
        <input
          className="input_item"
          id="user_email"
          type="email"
          placeholder="example@exmaple.com"
        />
      </label>
      <label className="input_group">
        <span className="input_tag">Name</span>
        <input className="input_item" type="text" placeholder="John Doe" />
      </label>
      <label className="input_group">
        <span className="input_tag">Message</span>
        <textarea className="input_item" placeholder="What's on your mind?" />
      </label>
      <input className="input_group input_btn" type="button" value="Send" />
    </form>
  );
}

export default ContactForm;
