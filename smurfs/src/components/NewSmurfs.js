import React from 'react'


function NewSmurfs(props){


     return(
          <div>
               <h3>{props.smurf.name}</h3>
               <p>{props.smurf.height}</p>
               <p>{props.smurf.age}</p>
          </div>
     )
}

export default NewSmurfs