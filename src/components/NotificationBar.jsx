import React, {useState, useEffect} from 'react';
import {store} from '../util/globalState';
// import {connect} from 'react-redux';
import close from '../static/images/close_notification.svg';

// const mapStateToProps = state => ({
//   toRender: state.toRender,
//   background: state.background,
//   show: state.show,
// });

function NotificationBar() {
  let activeStyle = {
    height: '100%',
    display: 'flex',
    visibility: 'visible',
    opacity: 1,
  };

  let hiddenStyles = {height: '0%', opacity: '0'};

  const [styles, setStyles] = useState(hiddenStyles);
  const [show, setShow] = useState(false);
  const [background, setBackground] = useState('none');
  const [toRender, setToRender] = useState(null);

  const handleClose = e => setShow(false);

  useEffect(() => {
    store.subscribe(() => {
      setShow(store.getState().show);
      setBackground(store.getState().background);
      setToRender(store.getState().toRender);
      // setStyles({})
    });
  });

  return (
    <>
      <div
        className="notification"
        style={show ? {...activeStyle, background} : hiddenStyles}
      >
        <div className="notification_close_container">
          <img
            className="notification_close"
            src={close}
            alt="close notification"
            onClick={handleClose}
          />
        </div>
        <div className="notification_body">{toRender}</div>
      </div>
    </>
  );
}

// export default connect(mapStateToProps)(NotificationBar);
export default NotificationBar;
