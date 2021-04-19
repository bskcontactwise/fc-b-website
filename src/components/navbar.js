import React from 'react'
import {Link} from "gatsby"
import Logo from "../images/flexilogo.png"

function NavBar() {
    return (
        <>
    

  <nav className="navbar navbar-expand-md navbar-light bg-white  fixed-top" aria-label="Fifth navbar example">
    <div className="container">
      <Link className="navbar-brand" href="/">
            <img  src ={Logo} alt="logo" width="200" height="75"/> 
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/Products" tabindex="-1" >Products</Link>
          </li>
        
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/Services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Services">Our Services</Link></li>
            <li><Link className="dropdown-item" to="/OffShore">Offshore Development Center</Link></li>
            <li><Link className="dropdown-item" to="/CustomApplication">Custom Application Development</Link></li>
            <li><Link className="dropdown-item" to="/ApplicationMaintenance">Application Maintenance</Link></li>
          </ul>
        </li>

          <li className="nav-item">
            <a className="nav-link " href="https://flexicontact.freshdesk.com/support/login" tabindex="-1" >Support</a>
          </li>
       
         
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/company" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/company">Company</Link></li>
            <li><Link className="dropdown-item" to="/Why">Why FlexiContact?</Link></li>
            <li><Link className="dropdown-item" to="/ourPeople">Our People</Link></li>
            <li><Link className="dropdown-item" to="/Carrers">Carrers</Link></li>
          </ul>
        </li>
          <li className="nav-item">
            <Link className="nav-link " to="/Contact" tabindex="-1" >Contact Us</Link>
          </li>
          
      
        </ul>
        
      </div>
    </div>
    </nav>
            
        </>
    )
}

export default NavBar
