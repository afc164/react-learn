import React, { Component } from 'react';
import './App.css'
import Search from './components/Search'
import List from './components/List'

class App extends Component {
    state = {
        users: [],
        loading: false,
        isFirst: true,
        error: ''
    }

    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state} />
            </div>
        );
    }
}

export default App;