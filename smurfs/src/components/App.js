import React, {useState, useReducer, useEffect} from "react";
import Smurfs from './Smurfs'
import {connect} from 'react-redux'
import { fetchSmurf} from '../actions' 
import {initialState, reducers} from '../reducers/index'
import NewSmurfs from './NewSmurfs'


import "./App.css";

function App(props){

  useEffect( () => {
    props.fetchSmurf()
  },[])


  const [state, dispatch] = useReducer(reducers, initialState);
  const [item, setItem] = useState({
    name:'',
    height:'',
    age:'',
    id:Date.now()
  })

  const handleChanges = event => {
    setItem({...item, [event.target.name]: event.target.value})
  }

  console.log(state)
  console.log(props.smurfs)

  return(
    <div>
      <div>
        <input 
        type="text"
        name="name"
        value={item.name}
        onChange={handleChanges}
        />
        <input 
        type="text"
        name="height"
        value={item.height}
        onChange={handleChanges}
        />
        <input 
        type="text"
        name="age"
        value={item.age}
        onChange={handleChanges}
        />
      </div>

      <button onClick={() => dispatch({type: "SMURF_FORM", payload:item })}>Add a Smurf to your village!</button>

      {
        props.smurfs.map(item => {
          return(<Smurfs smurfs={item} key={item.id} />)
        })
      }
      {
        state.smurfs.map(item => {
          return(<NewSmurfs smurf={item} key={item.id}/>)
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

export default connect(mapStateToProps, {fetchSmurf})(App);
