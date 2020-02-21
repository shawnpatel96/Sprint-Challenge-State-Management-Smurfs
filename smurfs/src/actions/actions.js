import axios from "axios"



export const fetchData= () => dispatch=>{
   
        dispatch({type: "FETCHING_DATA"});
        axios.get("http://localhost:3333/smurfs")
        .then (response=>{
            console.log("RESPONSE DATA:", response)
            dispatch({type: "FETCHING_SUCCESS", payload: response.data})
        })
        .catch (error=>{
            console.log("no data returned", error)
            dispatch({type: "FETCHING_FAIL", payload:"ERROR FETCHING FROM API"})
        })
    
}


export const addSmurf = smurf =>dispatch=>{
    dispatch ({type:"ADDING_SMURF"});
    axios.post("http://localhost:3333/smurfs", smurf)
    .then ( response=>{
        console.log(response)
        dispatch ({type: "ADDING_SMURF_SUCCESS", payload: response.data})
    })
    .catch (error=>{
        console.log("no data posted", error)
        dispatch({type: "ADDING_SMURF_FAIL", payload: "ERROR ADDING SMURF TO API"})
    })
}

export const deleteSmurf = smurf => dispatch =>{
    axios.delete (`http://localhost:3333/smurfs/${smurf}`)
    .then(response =>{
        console.log(response)
        dispatch({type:"FETCHING_SUCCESS", payload: response.data})
    })
    .catch (error=>{
        console.log("nothing was deleted", error)
        dispatch({type:"FETCHING_FAIL", payload: error.response})
    })
}