import axios from 'axios';
//Action Types
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

//Action Creators
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err })
    })
}

export const addSmurf = newSmurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err })
    })
}