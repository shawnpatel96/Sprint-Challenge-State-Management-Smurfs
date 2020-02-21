
const initialState ={
    smurfs: [],
    isFetchingData: false,
    error: ""
};


export const reducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCHING_DATA":
            return{
                ...state,
                isFetchingData: true
            }

        
        case "FETCHING_SUCCESS":
            return{
                ...state,
                smurfs: action.payload,
                isFetchingData: false,
            }
        case "FETCHING_FAIL":
            return{
                ...state,
                isFetchingData:false,
                error:action.payload
            }
        case "ADDING_SMURF":
            return{
                ...state,
                isFetchingData:true,
                error:""
            }
        case "ADDING_SMURF_SUCCESS":
            return{
                ...state,
                isFetchingData:action.payload,
                error:""
            }
        case "ADDING_SMURF_FAIL":
            return{
                ...state,
                isFetchingData:false,
                error:action.payload
                }
        default: return state
            
    };
};