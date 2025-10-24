import { combineReducers } from 'redux';

const initialState = {
  data: {},         // holds the date-keyed JSON
  selectedDate: null // currently selected date (string like '01-09-2025')
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, data: action.payload || {} };

    case 'SELECT_DATE':
      return { ...state, selectedDate: action.payload || null };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;
