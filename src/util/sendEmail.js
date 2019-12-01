import axios from 'axios';
import { message as messageNotification } from 'antd';

const url = 'https://ogworldbackend.herokuapp.com/';

const sendEmail = async ({ name, email, message }) => {
  axios
    .post(url, { name, email, message })
    .then((res) => {
      messageNotification.destroy();
      messageNotification.success({
        content: 'message submitted',
        duration: 5,
      });
    })
    .catch((err) => {
      messageNotification.destroy();
      messageNotification.error({ content: err.message, duration: 5 });
    });
};

export { sendEmail };

// async function makePostRequest(email, name, message) {
//     return await axios
//       .post(url, {
//         name,
//         email,
//         message,
//       })
//       .then(res => {
//         console.log(res.data.message);
//         store.dispatch(sendNotification(res.data.message, '#2bc138', true));
//         return res.data.message;
//       })
//       .catch(e => {
//         console.log(e.message);
//         store.dispatch(sendNotification(e.message, '#f44336', true));
//         return e.message;
//       });
//   }
