import React from 'react'
import Smurf from './Smurf'

function Smurfs(props){

     console.log(props.smurfs)
    
     return(
          // <div key={props.smurfs.id}>
          //      <h3>{props.smurfs.name}</h3>
          //      <p> Height: {props.smurfs.height}</p>
          //      <p> Age: {props.smurfs.age}</p>
          // </div>
          
          <div>
          {
              props.smurfs.map(item => {
                   return(
                        <Smurf smurf={item} key={item.id}/>
                   )
              })
          }
          </div>
     )
}

export default Smurfs