import {
  COUNT_ADD,
  COUNT_REMOVE,
  COUNT_CLEAR
} from './actionTypes';

/**
 * 
 * just simple function for simulation async behavior
 * 
 */
const wait = () => new Promise((resolve, reject) => {
  const ms = Math.random() * 1000;
  setTimeout(()=>{
    return Math.random()*1000 + 200 > 500 ? resolve('Success') : reject('Failed');
  }, ms);
});

export const countAddRequest = () => ({ type: COUNT_ADD.REQUEST });

export const countAddSuccess = () => ({ type: COUNT_ADD.SUCCESS });

export const countAddError = (error) => ({ type: COUNT_ADD.ERROR, error });

export const countRemoveRequest = () => ({ type: COUNT_REMOVE.REQUEST });

export const countRemoveSuccess = () => ({ type: COUNT_REMOVE.SUCCESS });

export const countRemoveError = (error) => ({ type: COUNT_REMOVE.ERROR, error });

export const countClearRequest = () => ({ type: COUNT_CLEAR.REQUEST });

export const countClearSuccess = () => ({ type: COUNT_CLEAR.SUCCESS });

export const countClearError = (error) => ({ type: COUNT_CLEAR.ERROR, error });

export const addCount = () => async dispatch => {
  try {
    await dispatch(countAddRequest()); 
    await wait();
    await dispatch(countAddSuccess());        
  } catch (error) {
    await dispatch(countAddError(error));       
  }
};
export const removeCount = () => async dispatch => {
  try {
    await dispatch(countRemoveRequest()); 
    await wait();
    await dispatch(countRemoveSuccess());        
  } catch (error) {
    await dispatch(countRemoveError(error));       
  }
};
export const clearCount = () => async dispatch => {
  try {
    await dispatch(countClearRequest()); 
    await wait();
    await dispatch(countClearSuccess());        
  } catch (error) {
    await dispatch(countClearError(error));       
  }
};



