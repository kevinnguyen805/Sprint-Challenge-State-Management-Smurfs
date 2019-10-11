import React, {useState, useReducer, useEffect} from "react";
import Smurfs from './Smurfs'
import {connect} from 'react-redux'
import { fetchSmurf, smurfForm } from '../actions' 

import "./App.css";

function App(props){

  useEffect( () => {
    props.fetchSmurf()
  },[])

  const [newSmurf, setNewSmurf] = useState({
    name:'',
    height:'',
    age:''
  })
  

  const handleChanges = event => {
    setNewSmurf({
      ...newSmurf, [event.target.name] : event.target.value
    })
  }

  return(
    <div>
      <div>
        <input 
        type="text"
        name="name"
        value={name}
        onChange={handleChanges}
        />
        <input 
        type="text"
        name="height"
        value={height}
        onChange={handleChanges}
        />
        <input 
        type="text"
        name="age"
        value={age}
        onChange={handleChanges}
        />
      </div>

      <button onClick={() => props.smurfForm(newSmurf)}>Add a Smurf to your village!</button>

      {
        props.smurfs.map(item => {
          return(<Smurfs smurfs={item} key={item.id} />)
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurf, smurfForm})(App);
