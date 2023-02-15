import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
  <a className="navbar-brand" href="#">Food Delivery</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">

      <Link to='/cart'>
      <li className="nav-item">
        <div className="nav-link">GO TO CART</div>
      </li>
      </Link>
      
    </ul>
  </div>
</nav>
  )
}
