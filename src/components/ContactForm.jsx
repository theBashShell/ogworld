import React, {useState, createContext} from 'react';
import axios from 'axios';

let email, name, message;
const url = 'http://localhost:9090';
export const NotificationContext = createContext(null);

function ContactForm() {
  const handleSend = e =>
    axios.post(url, {
      name, email, message
    });

  return (
    <form className="contact_form" method="POST" action="">
      <label className="input_group">
        <span className="input_tag">Email</span>
        <input
          required
          className="input_item"
          id="user_email"
          type="email"
          placeholder="example@exmaple.com"
          onChange={e => (email = e.target.value)}
        />
      </label>
      <label className="input_group">
        <span className="input_tag">Name</span>
        <input
          required
          className="input_item"
          type="text"
          placeholder="John Doe"
          onChange={e => (name = e.target.value)}
        />
      </label>
      <label className="input_group">
        <span className="input_tag">Message</span>
        <textarea
          required
          className="input_item"
          placeholder="What's on your mind?"
          onChange={e => (message = e.target.value)}
        />
      </label>
      <input
        onClick={handleSend}
        className="input_group input_btn"
        type="button"
        value="Send"
      />
    </form>
  );
}

export default ContactForm;
