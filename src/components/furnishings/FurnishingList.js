import React, { Component } from 'react'
//import the components we will need
import FurnishingManager from '../../modules/FurnishingManager';
import FurnishingCard from './FurnishingCard';

class FurnishingList extends Component {
    //define what this component needs to render
    state = {
        furnishings: [],
    }

    componentDidMount() {
        console.log("Furnishing LIST: ComponentDidMount");
        //getAll from RoomManager and hang on to that data; put it in state
        FurnishingManager.getAll()
            .then((furnishings) => {
                this.setState({
                    furnishings: furnishings
                })
            })
    }

    render() {
        console.log("Furnishing LIST: Render");

        return (

            <div className="container-cards">
                <article>
                    {/* //add this button above your display of room cards */}
                    <section className="section-content">
                        <button type="button"
                            className="btn"
                            onClick={() => { this.props.history.push("/furnishings/new") }}>
                            Add New Furnishings
                        </button>
                    </section>
                    {this.state.furnishings.map(furnishing => <FurnishingCard key={furnishing.id} furnishing={furnishing} />)}
                </article>
            </div>
        )
    }
}

export default FurnishingList