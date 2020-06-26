import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../rooms/Room.css'

class FurnishingCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{this.props.furnishing.furnishName}</h1>
          <h3>{this.props.furnishing.furnishDescription}</h3>
          <h3>{this.props.furnishing.furnishPrice}</h3>
          

          <p>YEET</p>
        </div>
      </div>
    );
  }
}

export default FurnishingCard;