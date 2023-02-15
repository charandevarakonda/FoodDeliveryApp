
import Navbartwo from './components/SecondBar'
import axios from 'axios' 
import { React,useEffect,useState } from 'react'

const Cart = () => {
  function deleteFooditem(id){
    fetch(`http://localhost:5000/cart/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
       alert("Item has been deleted from cart")
       getDoctors()
       
      })
    })
    }
  let [res,setRes] = useState("default")
     useEffect(()=>{
        getDoctors()
       
    },[]) 
    function getDoctors(){
        axios.get("http://localhost:5000/cart").then(res=>{
            setRes(res)
            console.log(res.data)
          }) 
    }
    function orderFooditem(){
      alert("The item has been confirmed")
    }
  if(res !=="default"){
  return (
    <div>
      <Navbartwo/>
      <table className="table">
                <thead>
                    <tr className="bg-light">
                        <th scope="col" width="10%">item name</th>
                        <th scope="col" width="10%">category</th>
                        <th scope="col" width="10%">order now</th>
                        <th scope="col" width="10%">delete item</th>
                    </tr>
                </thead>
                <tbody>
                { 
                   res.data.map((fooditem,index) => {
					      return (
                  
                       <tr key={index}>
                         <td  key={`1${index}`}>
                             {fooditem.name}
                         </td>
                         <td key={`2${index}`}>
                             {fooditem.category}    
                         </td>
                         <td key={`3${index}`}>
                             <button onClick={()=>orderFooditem()}>confirm order</button>
                         </td>
                         <td key={`4${index}`}>
                            <button onClick={()=>deleteFooditem(fooditem.id)}>Remove</button>
                        </td>
                        </tr>    
                        )
                         })         
                }
                
                </tbody>
            </table>
        
    </div>
  )
              }
}
export default Cart