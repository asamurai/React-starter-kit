import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';

import counter from './counter';

export default combineReducers({
  counter,
  form: formReducer
});
