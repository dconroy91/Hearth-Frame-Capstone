import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../rooms/Room.css'

class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{this.props.project.projectName}</h1>
          
          <h3>{this.props.project.projectDescription}</h3>
          <h3>Materials: {this.props.project.materials}</h3>
          <h3>Est. Price: {this.props.project.estPrice}</h3>
          <h3>Due Date: {this.props.project.dueDate}</h3>
        </div>
      </div>
    );
  }
}

export default ProjectCard;