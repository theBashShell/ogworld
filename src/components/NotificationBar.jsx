import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {store} from '../util/globalState';

import close from '../static/images/close_notification.svg';

const mapStateToProps = state => ({
  notification: state.notification, 
});

function NotificationBar({notification, color}) {
  const [notificationState, setNotificationState] = useState('hidden');
  const [styles, setStyles] = useState({});

  const showNotificationBar = e => {
    setStyles({
      ...styles,
      height: '100%',
      display: 'flex',
      visibility: 'visible',
      opacity: 1,
      background: color,
    });
    setNotificationState('showing');
  };
  const hideNotificationBar = e => {
    setStyles({...styles, height: '0%', opacity: 0});
    setNotificationState('hidden');
  };

  useEffect(() => {
    store.subscribe(a => {
      console.log(a);
      showNotificationBar();
    });
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
