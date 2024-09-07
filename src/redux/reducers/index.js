
import { combineReducers } from 'redux';

// Placeholder reducer
const placeholderReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

export default rootReducer;
