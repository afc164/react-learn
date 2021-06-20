import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom' 
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

class index extends Component {
    render() {
        return (
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <h3>我是Home的内容</h3>
                        <div>
                            <ul className="nav nav-tabs">
                                <li>
                                    <MyNavLink className="list-group-item" to="/home/news">News</MyNavLink>
                                </li>
                                <li>
                                    <MyNavLink className="list-group-item" to="/home/message">Message</MyNavLink>
                                </li>
                            </ul>
                        <Switch>
                            <Route path="/home/news" component={News}></Route>
                            <Route path="/home/message" component={Message}></Route>
                            <Redirect to="/home/news"></Redirect>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;