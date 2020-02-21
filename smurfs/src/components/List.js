import React from "react"
import {connect} from "react-redux"
import {fetchData} from "../actions/actions"
import styled from "styled-components"
import {deleteSmurf} from "../actions/actions"
const Card = styled.div`
border: 5px solid red;
padding:5%;
margin-top:5%;
background-color:black;
color:white;
width:50%;
margin-left: 20%;

`
const List = (props) =>{
    const handleFetchData= event =>{
        event.preventDefault()
        props.fetchData()
    }
    const handleDelete = event =>{
        event.preventDefault()
        props.deleteSmurf(props.smurf.id)
    }
    return(
        <div>
            <button onClick={handleFetchData}>Get Da Smurfs</button>
            {props.smurfs && !props.isFetchingData && (
                <div>
                    {props.smurfs.map(smurf=>(
                        <Card id={smurf.id}>
                            <h1>Name: {smurf.name}</h1>
                            <h3>Age: {smurf.age}</h3>
                            <h3>Height: {smurf.height}</h3>
                            <h4>Ear Tag Number: {smurf.id}</h4>
                            <button onClick={() => {props.deleteSmurf(smurf.id)}}>CLICK TO DELETE</button>
                        </Card>
                    ))}
                </div>
            )}
            
        </div>
    )
};

const mapStateToProps = state =>{
    return{
        isFetchingData: state.isFetchingData,
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps, 
    {fetchData, deleteSmurf})(List)