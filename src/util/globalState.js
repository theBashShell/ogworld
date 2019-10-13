import redux, {createStore} from 'redux';

const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

const initialState = {
  notification: '', 
};

const showNotification = (notificationToShow) => ({
  type: SHOW_NOTIFICATION,
  notificationToShow, 
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {  
        notification: action.notificationToShow 
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default reducer;
export {store, showNotification};
