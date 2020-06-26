import React, { Component } from 'react';
import './RoomForm.css'
import RoomManager from '../../modules/RoomManager';

class RoomForm extends Component {
    state = {
        roomName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create room      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewRoom = evt => {
        evt.preventDefault();
        if (this.state.roomName === "") {
            window.alert("Please name your new room");
        } else {
            this.setState({ loadingStatus: true });
            const room = {
                roomName: this.state.roomName,
            };

            // Create the room and redirect user to room list
            RoomManager.post(room)
                .then(() => this.props.history.push("/rooms"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="roomName"
                                placeholder="Name new Room"
                            />
                            <label htmlFor="roomName">Name</label>
                        
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewRoom}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}


export default RoomForm