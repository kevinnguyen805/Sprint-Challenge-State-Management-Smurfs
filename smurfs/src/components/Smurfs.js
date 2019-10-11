import React from 'react'


function Smurfs(props){


     return(
          <div key={props.smurfs.id}>
               <h3>{props.smurfs.name}</h3>
               <p> Height: {props.smurfs.height}</p>
               <p> Age: {props.smurfs.age}</p>
          </div>
     )
}

export default Smurfs