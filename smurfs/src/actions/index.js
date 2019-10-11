import axios from 'axios'

export const SMURF_START = "SMURF_START";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAILURE = "SMURF_FAILURE";

export const fetchSmurf = () => dispatch => {
     dispatch({type: SMURF_START});
     axios.get('http://localhost:3333/smurfs')
     .then(response => {
          // console.log(response)
          dispatch({type: SMURF_SUCCESS, payload: response.data})
     })
     .catch(error => {
          dispatch({type: SMURF_FAILURE, payload: error})
     })
}


export const FORM_SUCCESS = "FORM_SUCCESS";

export const smurfForm = (formData) => dispatch => {
     dispatch({type: FORM_SUCCESS, payload: formData})
}
