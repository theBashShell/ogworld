import redux, {createStore} from 'redux';
import {red} from 'ansi-colors';

const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

const initialState = {
  toRender: null,
  background: 'none',
  show: false,
};

function sendNotification(toRender, background, show) {
  return {type: SHOW_NOTIFICATION, toRender, background, show};
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        toRender: action.toRender,
        background: action.background,
        show: action.show,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export {store, sendNotification};
