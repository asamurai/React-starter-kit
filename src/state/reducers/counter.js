import { fromJS } from 'immutable';

import {
  COUNT_ADD,
  COUNT_REMOVE,
  COUNT_CLEAR
} from '../actions/count/actionTypes';

const initialState = fromJS({
  loading: false,
  error: null,
  count: 0
});

export default function (state = initialState, action) {
  switch (action.type) {
    case COUNT_ADD.REQUEST:
    case COUNT_REMOVE.REQUEST:
    case COUNT_CLEAR.REQUEST:
      return state.merge(fromJS({ error: null, loading: true }));
    case COUNT_ADD.SUCCESS:
      return state.merge(fromJS({ error: null, loading: false, count: state.get('count') + 1 }));
    case COUNT_REMOVE.SUCCESS:
      return state.merge(fromJS({ error: null, loading: false, count: state.get('count') - 1 }));
    case COUNT_CLEAR.SUCCESS:
      return state.merge(fromJS({ error: null, loading: false, count: 0 }));
    case COUNT_ADD.ERROR:
    case COUNT_REMOVE.ERROR:
    case COUNT_CLEAR.ERROR:
      return state.merge(fromJS({ error: action.error, loading: false }));
    default:
      return state;
  }
}
