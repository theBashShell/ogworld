import React, {useState} from 'react';
import axios from 'axios';
import {store, sendNotification} from '../util/globalState';

const url = 'https://ogworldbackend.herokuapp.com/'; // 'http://localhost:9090';

let msg;

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = e => {
    const result = makePostRequest(email, name, message);
  };

  async function makePostRequest(email, name, message) {
    return await axios
      .post(url, {
        name,
        email,
        message,
      })
      .then(res => {
        console.log(res.data.message);
        store.dispatch(sendNotification(res.data.message, '#2bc138', true));
        return res.data.message;
      })
      .catch(e => {
        console.log(e.message);
        store.dispatch(sendNotification(e.message, '#f44336', true));
        return e.message;
      });
  }

  return (
    <>
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
    </>
  );
}

export default ContactForm;
