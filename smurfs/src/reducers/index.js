import {SMURF_START, SMURF_SUCCESS, SMURF_FAILURE, FORM_SUCCESS} from '../actions/'


const initialState = {
     smurfs: [],
     errors: '',
     isFetching: false
}

const reducers = (state = initialState, action) => {
     switch(action.type){
          case SMURF_START: 
               return{
                    ...state,
                    isFetching: true
               }
          case SMURF_SUCCESS:
               return{
                    ...state,
                    errors: '',
                    isFetching: false, 
                    smurfs: action.payload
               }
          case SMURF_FAILURE:
               return{
                    ...state, 
                    errors: "Uh oh! You didn't fetch your smurf data",
                    isFetching: false
               }
          case FORM_SUCCESS:
               const newSmurf = {
                    ...action.payload,
                    id: Date.now()
               }
               return{
                    ...state,
                    smurfs: [
                         ...state.smurfs, newSmurf
                    ]
               }
          default:
               return state 
     }
}
export default reducers