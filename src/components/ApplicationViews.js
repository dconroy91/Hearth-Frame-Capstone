import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import RoomList from './rooms/RoomList'
import RoomForm from './rooms/RoomForm'
import ProjectList from './projects/ProjectList'
import FurnishingList from './furnishings/FurnishingList'
//only include these once they are built - previous practice exercise



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/rooms" render={(props) => {
          return <RoomList {...props} />
        }} />

        {/* this is route to room form */}
        <Route path="/rooms/new" render={(props) => {
          return <RoomForm {...props} />
        }} />

        <Route path="/projects" render={(props) => {
          return <ProjectList {...props} />
        }} />

        <Route path="/furnishings" render={(props) => {
          return <FurnishingList {...props} />
        }} />


      </React.Fragment>
    )
  }
}

export default ApplicationViews