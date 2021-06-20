import React, { Component } from 'react';
import './index.css'

class index extends Component {
    handleCheckAll = (event) => {
        this.props.handleCheckAll(event.target.checked)
    }

    handleDeleteAllDone = () => {
        this.props.handleDeleteAllDone()
    }

    render() {
        const {todos} = this.props
        let doneCount = todos.reduce((pre,cur)=>{
            return pre + (cur.done?1:0)
        },0)
        let totalCount = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleCheckAll} type="checkbox" checked={doneCount === totalCount && totalCount !== 0}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{totalCount}
                </span>
                <button onClick={this.handleDeleteAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default index;