import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'
import Detail from './Detail'

class index extends Component {
    state= {
        msgArr: [
            {id:'01', title:'message001'},
            {id:'02', title:'message002'},
            {id:'03', title:'message003'}
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.msgArr.map(item => {
                        return (
                            <li key={item.id}>
                                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}
                                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                                <Link to={{pathname: '/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
                <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        );
    }
}

export default index;