 import React, { Component } from "react";

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = { term: 'Starting Value' };
    }

    render() {
        return <input 
            value={this.state.term}
            onChange={(eventObject) => this.setState({term: eventObject.target.value})}/>
    }    
}

export default SearchBar;