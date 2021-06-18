import React, { Component } from 'react';
import './index.css'

class index extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return (event) => {
            console.log(flag)
            this.setState({mouse:flag})
        }
    }
    render() {
        const {item}=this.props
        return (
            <li style={{backgroundColor:this.state.mouse?'#ddd':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" defaultChecked={item.done}/>
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>删除</button>
            </li>
        );
    }
}

export default index;