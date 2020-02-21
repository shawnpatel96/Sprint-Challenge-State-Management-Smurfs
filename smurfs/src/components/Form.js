import React, {useState} from "react"
import {connect} from "react-redux"
import {addSmurf} from "../actions/actions"



const Form =(props)=>{
    const [newSmurf, setNewSmurf]=useState({
        name:"",
        age:0,
        height:""
    });

    const handleChanges = (event) =>{
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name:"",
            age:0,
            height:""
        })
    };
    return(
        <form onSubmit={handleSubmit}>
            <p> New Smurf Name:</p>

            <input 
            name="name" 
            placeholder="...smurf name here" 
            value={newSmurf.name} 
            onChange={handleChanges}/>

            <input 
            name="age" 
            placeholder="...smurf age here" 
            value={newSmurf.age} 
            onChange={handleChanges}/>

            <input 
            name="height" 
            placeholder="...smurf height here" 
            value={newSmurf.height} 
            onChange={handleChanges}/>

            <div>
                <button>CLICK TO ADD SMURF</button>
            </div>

        </form>
    )

};

const mapStateToProps =state=>{
    return {
        isFetchingData: state.isFetchingData,
        smurfs: state.smurfs,
        error: state.error
    }
}
export default connect (
    mapStateToProps, 
    {addSmurf})(Form)