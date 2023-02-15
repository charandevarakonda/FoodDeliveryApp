import React, { useState } from 'react'
import axios from 'axios'

export default function Pizza({ fitem }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')

    const fun = (piz) => {
        console.log("hello",piz)
        axios.post("http://localhost:5000/cart",piz).then(() => 
        alert("Item has been added to cart"))
    }
    return (
        <>
    <div style={{ margin: "70px" }} className="shadow-lg p-3 mb-5 bg-white rounded">
            <div>
            <h1>{fitem.name}</h1>
            <img src={fitem.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className="form-control" value={quantity} onChange={(e) => { setquantity(e.target.value) } }>
                        {[...Array(10).keys()].map((_x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-1">Price: {fitem.prices[0][varient] * quantity}</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={() => fun(fitem)}>Add to cart</button>
                </div>
            </div>
        </div>
        </>
    )
}
