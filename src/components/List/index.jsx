import React, { Component } from 'react';
import Item from "../Item";
import PropTypes from 'prop-types'
import './index.css'

class index extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changChecked: PropTypes.func.isRequired,
        deleteItem:PropTypes.func.isRequired
    }
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(item => {
                        return <Item deleteItem={this.props.deleteItem} changChecked={this.props.changChecked} key={item.id} item={item}/>
                    })
                }
            </ul>
        );
    }
}

export default index;