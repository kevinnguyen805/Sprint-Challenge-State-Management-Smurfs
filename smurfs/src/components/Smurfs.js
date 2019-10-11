import React from 'react'

function Smurfs(props){

     console.log(props.smurfs)

     return(
          <div>
               {
                    props.smurfs.map(item => {
                         return(
                              <div key={item.id}>
                              <h3>{item.name}</h3>
                              <p>{item.height}</p>
                              <p>{item.age}</p>
                              </div>
                         )
                    })
               }
          </div>
     )
}

export default Smurfs