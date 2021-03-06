import React, { Component } from 'react';
import './index.css'

class index extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return (event) => {
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id)=> {
        return (event) => {
            this.props.changChecked(id,event.target.checked)
        }
    }

    handleDelete=(id)=>{
        if(window.confirm('确定删除吗？')){
            this.props.deleteItem(id)
        }
    }

    render() {
        const {item}=this.props
        return (
            <li style={{backgroundColor:this.state.mouse?'#ddd':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" onChange={this.handleCheck(item.id)} checked={item.done}/>
                    <span>{item.name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(item.id)}} className="btn btn-danger" style={{display:this.state.mouse?'block':'none'}}>删除</button>
            </li>
        );
    }
}

export default index;