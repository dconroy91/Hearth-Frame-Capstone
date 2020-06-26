import React, { Component } from 'react'
//import the components we will need
import ProjectManager from '../../modules/ProjectManager';
import ProjectCard from './ProjectCard';

class ProjectList extends Component {
    //define what this component needs to render
    state = {
        projects: [],
    }

    componentDidMount() {
        console.log("Room LIST: ComponentDidMount");
        //getAll from RoomManager and hang on to that data; put it in state
        ProjectManager.getAll()
            .then((projects) => {
                this.setState({
                    projects: projects
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
                            onClick={() => { this.props.history.push("/projects/new") }}>
                            Create a New Project!
  </button>
                    </section>
                    {this.state.projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </article>
            </div>
        )
    }
}

export default ProjectList