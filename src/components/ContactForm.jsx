import React, {useState, createContext} from 'react';
import axios from 'axios';

const url = 'https://ogworldbackend.herokuapp.com/';
export const NotificationContext = createContext(null);

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = e => {
    axios
      .post(url, {
        name,
        email,
        message,
      })
      .then(a => console.log(a));
  };

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
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className="input_group">
        <span className="input_tag">Name</span>
        <input
          required
          className="input_item"
          type="text"
          placeholder="John Doe"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="input_group">
        <span className="input_tag">Message</span>
        <textarea
          required
          className="input_item"
          placeholder="What's on your mind?"
          onChange={e => setMessage(e.target.value)}
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
