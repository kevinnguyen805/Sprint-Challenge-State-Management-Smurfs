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
    id:''
  })

  const handleChanges = event => {
    setItem({...item, [event.target.name]: event.target.value})
  }


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

      {
        props.smurfs.map(item => {
          return(
            <Smurfs smurfs={item} key={item.id}/>
          )
        })
      }
   

      <Smurfs smurfs={props.smurfs}/>
   
    </div>
  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {fetchSmurf})(App);
