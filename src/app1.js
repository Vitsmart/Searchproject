import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchbox from "./Searchbox";

class App1 extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
onsearchchange = (event) => {
    this.setState({searchfield: event.target.value})
}
render() {
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
    })

    return (
        <div id="root">
        <div className='tc'>
            <h1>Robofriends</h1>;
            <Searchbox searchchange={this.onsearchchange}/>,
            <Cardlist robots = { filteredRobots } />
        </div>
        </div>

    );
}
}
export default App1;