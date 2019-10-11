import React, {useEffect} from "react";
import Smurfs from './Smurfs'
import {connect} from 'react-redux'
import { fetchSmurf } from '../actions' 

import "./App.css";

function App(props){

  useEffect( () => {
    props.fetchSmurf()
  },[])

  console.log(props.smurfs)

  return(
    <div>

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

export default connect(mapStateToProps, {fetchSmurf})(App);
