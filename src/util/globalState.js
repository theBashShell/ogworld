import redux, {createStore} from 'redux';

const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

const initialState = {
  notification: '<></>',
  colour: '',
};

const showNotification = (notificationToShow, colour) => ({
  type: SHOW_NOTIFICATION,
  notificationToShow,
  colour,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.notificationToShow,
        colour: action.colour,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default reducer;
export {store, showNotification};
