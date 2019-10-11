import React from 'react'

function Smurfs(props){

     console.log(props.smurfs)

     return(
          <div>
               <h3>{props.smurfs.name}</h3>
               <p>{props.smurfs.height}</p>
               <p>{props.smurfs.age}</p>
          </div>
     )
}

export default Smurfs