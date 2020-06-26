import React, { Component } from 'react'
//import the components we will need
import RoomCard from './RoomCard';
import RoomManager from '../../modules/RoomManager';

class RoomList extends Component {
    //define what this component needs to render
    state = {
        rooms: [],
    }

    componentDidMount() {
        console.log("Room LIST: ComponentDidMount");
        //getAll from RoomManager and hang on to that data; put it in state
        RoomManager.getAll()
            .then((rooms) => {
                this.setState({
                    rooms: rooms
                })
            })
    }

    render() {
        console.log("ROOM LIST: Render");

        return (

            <div className="container-cards">
                <article>
                    {/* //add this button above your display of room cards */}
                    <section className="section-content">
                        <button type="button"
                            className="btn"
                            onClick={() => { this.props.history.push("/rooms/new") }}>
                            Create a New Room!
  </button>
                    </section>
                    {this.state.rooms.map(room => <RoomCard key={room.id} room={room} />)}
                </article>
            </div>
        )
    }
}

export default RoomList