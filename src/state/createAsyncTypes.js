const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

/**
 * Function for creating 3 types of async handling:  
 * 
 * REQUEST - for starting requesting and make loading/pending side effects; 
 * 
 * SUCCESS - for gaining success response; 
 * 
 * ERROR - for handling errors response; 
 * 
 * 
 * Put action name as a param.
 * 
 * @param {string} action 
 * 
 * @return {object} object
 */

const createAsyncTypes = (action) => [REQUEST, SUCCESS, ERROR].reduce((prevState, type) => ({
  [`${type}`]: `${action}_${type}`,
  ...prevState
}), {});

export default createAsyncTypes;
