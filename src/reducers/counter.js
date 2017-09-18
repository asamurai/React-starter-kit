import {
    COUNT_ADD,
    COUNT_REMOVE,
    COUNT_CLEAR
} from './../constants';

const initialState = {
    loading: false,
    error: null,
    count: 0
};

export default function (state = initialState, action){
    switch (action.type) {
        case COUNT_ADD.REQUEST: 
        case COUNT_REMOVE.REQUEST:
        case COUNT_CLEAR.REQUEST:
            return {...state, error: null, loading: true};
            break;
        case COUNT_ADD.SUCCESS:
            return {...state, error: null, loading: false, count: state.count+1 };
            break;
        case COUNT_REMOVE.SUCCESS: 
            return {...state, error: null, loading: false, count: state.count-1 };
            break;
        case COUNT_CLEAR.SUCCESS: 
            return {...state, error: null, loading: false, count: 0 };
            break;
        case COUNT_ADD.ERROR: 
        case COUNT_REMOVE.ERROR:
        case COUNT_CLEAR.ERROR:
            return {...state, error: action.error, loading: false};
            break;  
        default:
            return state;
            break;
    }
}

