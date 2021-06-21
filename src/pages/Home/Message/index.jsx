import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Detail from './Detail'

class index extends Component {
    state= {
        msgArr: [
            {id:'01', title:'message001'},
            {id:'02', title:'message002'},
            {id:'03', title:'message003'}
        ]
    }
    replaceShow = (id, title) => {
        this.props.history.replace('/home/message/detail', {id, title})
    }
    pushShow = (id, title) => {
        this.props.history.push('/home/message/detail', {id, title})
    }
    goBack=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    go=()=> {
        this.props.history.go(-2)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.msgArr.map(item => {
                        return (
                            <li key={item.id}>
                                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                                <button onClick={() => {this.pushShow(item.id,item.title)}}>push查看</button>
                                <button onClick={() => {this.replaceShow(item.id,item.title)}}>replace查看</button>
                                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                                {/* <Link to={{pathname: '/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link> */}
                            </li>
                        )
                    })}
                </ul>
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
                <Route path="/home/message/detail" component={Detail}></Route>

                <button onClick={this.goBack}>回退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default index;