import React from 'react'

function Smurfs(props){

     // console.log(props.smurfs)

     return(
          <div>
               <h3>Name: {props.smurfs.name}</h3>
               <p>Height: {props.smurfs.height}</p>
               <p>Age: {props.smurfs.age}</p>
          </div>
     )
}

export default Smurfs