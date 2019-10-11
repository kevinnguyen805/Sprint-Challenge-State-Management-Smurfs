import {SMURF_START, SMURF_SUCCESS, SMURF_FAILURE, SMURF_FORM} from '../actions/'


export const initialState = {
     smurfs: [],
     errors: '',
     isFetching: false
}

export const reducers = (state = initialState, action) => {
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
                    smurfs: [...state.smurfs, action.payload]
               }
          case SMURF_FAILURE:
               return{
                    ...state, 
                    errors: "Uh oh! You didn't fetch your smurf data",
                    isFetching: false
               }



          // case SMURF_FORM:
          //      console.log(action.payload)
          //      return{
          //           ...state,
          //           smurfs: [...state.smurfs, action.payload]
          //      }
          // case "SMURF_FORM":
          //      console.log(action.payload)
          //      const newItem = {
          //           ...action.payload, 
          //           id: Date.now()
          //      }
          //      return{
          //           ...state,
          //           smurfs: [...state.smurfs, newItem]
          //      }
          default:
               return state 
     }

}
export default reducers