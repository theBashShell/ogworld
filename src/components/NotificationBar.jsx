import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {store} from '../util/globalState';

import close from '../static/images/close_notification.svg';

const mapStateToProps = state => ({
  notification: state.notification,
  colour: state.colour,
});

function NotificationBar({colour, notification}) {
  const [notificationState, setNotificationState] = useState('hidden');
  const [styles, setStyles] = useState({});

  const showNotificationBar = e => {
    setStyles({
      height: '100%',
      display: 'block',
      visibility: 'visible',
      background: colour,
    });
    setNotificationState('showing');
  };
  const hideNotificationBar = e => {
    setStyles({height: '0%'});
    setNotificationState('hidden');
  };

  useEffect(() => {
    store.subscribe(() => showNotificationBar());
  });

  const handleClose = e => hideNotificationBar();

  return (
    <div className="notification" style={styles}>
      <div className="notification_close_container">
        <img
          className="notification_close"
          src={close}
          alt="close notification"
          onClick={handleClose}
        />
      </div>
      {notificationState === 'hidden' ? (
        <></>
      ) : (
        <section className="notification_body">{notification}</section>
      )}
    </div>
  );
}

export default connect(mapStateToProps)(NotificationBar);
