import {
    COUNT_ADD,
    COUNT_REMOVE,
    COUNT_CLEAR
} from './../constants';

/**
 * 
 * just simple function for simulation async behavior
 * 
 */
let wait = () => new Promise((resolve, reject) => {
    const ms = Math.random()*1000;
    setTimeout(()=>{
        return Math.random()*1000 + 200 > 500 ? resolve('Success') : reject('Failed');
    }, ms);
});

export const addCount = () => async dispatch => {
    try {
        await dispatch({
            type: COUNT_ADD.REQUEST
        }); 
        await wait();
        await dispatch({
            type: COUNT_ADD.SUCCESS
        });        
    } catch (error) {
        await dispatch({
            type: COUNT_ADD.ERROR,
            error: error
        });       
    }
};
export const removeCount = () => async dispatch => {
    try {
        await dispatch({
            type: COUNT_REMOVE.REQUEST
        }); 
        await wait();
        await dispatch({
            type: COUNT_REMOVE.SUCCESS
        });        
    } catch (error) {
        await dispatch({
            type: COUNT_REMOVE.ERROR,
            error: error
        });       
    }
};
export const clearCount = () => async dispatch => {
    try {
        await dispatch({
            type: COUNT_CLEAR.REQUEST
        }); 
        await wait();
        await dispatch({
            type: COUNT_CLEAR.SUCCESS
        });        
    } catch (error) {
        await dispatch({
            type: COUNT_CLEAR.ERROR,
            error: error
        });       
    }
};



