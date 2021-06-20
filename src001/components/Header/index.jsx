import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

class index extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        if (event.keyCode !== 13) {
            return
        }
        if(event.target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        let todoObj = {
            id: nanoid(),
            name: event.target.value,
            done:false
        }
        this.props.addTodo(todoObj)
        event.target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        );
    }
}

export default index;