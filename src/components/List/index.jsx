import React, { Component } from 'react';
import Item from "../Item";
import './index.css'

class index extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(item => {
                        return <Item changChecked={this.props.changChecked} key={item.id} item={item}/>
                    })
                }
            </ul>
        );
    }
}

export default index;