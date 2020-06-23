import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Hearth Frame<br />
          <small>Make Your Home Great Again</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/rooms">Rooms</Link></li>
            <li>Log Out</li>
            
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;