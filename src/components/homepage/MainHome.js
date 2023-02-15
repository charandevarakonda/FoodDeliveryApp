import React from 'react'
import pizzas from '../../fooddata'
import Pizza from '../Food'
import Navbar from '../FirstBar'

export default function Homescreen() {
  return (

    <div>
      <Navbar/>
         <div className="row">
        {pizzas.map(fitem=>{
            return <div className = "col-md-4">
                <div><Pizza fitem = {fitem}/>
                </div>
                </div>
        })}
         </div>
    </div>
  )
}
