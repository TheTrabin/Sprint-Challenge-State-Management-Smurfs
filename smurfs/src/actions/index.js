import axios from 'axios';


export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';
export const FETCH_SMURF_POST = 'FETCH_SMURF_POST';

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    
    .then(res => {
     console.log(res); 
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
      
    })
    .catch(err => dispatch({ type: FETCH_SMURF_FAIL, payload: err }));
};

export const postSmurf = newSmurf => {
    return dispatch => {
    dispatch({ type: FETCH_SMURF_POST });
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      
      .then(res => dispatch({ type: FETCH_SMURF_POST, payload: res.data }));
    }
    };