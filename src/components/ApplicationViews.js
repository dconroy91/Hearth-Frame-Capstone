import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import RoomCard from './rooms/RoomCard'
import Home from './home/Home'
//only include these once they are built - previous practice exercise



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/rooms" render={(props) => {
          return <RoomCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews