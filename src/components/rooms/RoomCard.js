import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Room.css'

class RoomCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{this.props.room.roomName}</h1>
          <h2><Link class = "proj-link" to="/projects">Projects</Link></h2>
          <h2><Link class = "proj-link" to="/furnishings">Furnishings</Link></h2>
          <button type="button"
        onClick={() => { this.props.history.push(`/rooms/${this.props.projects.id}`) }}>Details</button>
        </div>
      </div>
    );
  }
}

export default RoomCard;