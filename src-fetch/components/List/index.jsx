import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class List extends Component {
    state = {
        users: [],
        loading: false,
        isFirst: true,
        error: ''
    }

    componentDidMount () {
        this.token = PubSub.subscribe('sub', (_, data) => {
            this.setState(data)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,loading,error} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用</h2> :
                    loading ? <h2>loading</h2> : 
                    error? <h2 style={{color: 'red'}}>{error}</h2> :
                    users.map(user => {
                        return (
                            <div key={user.id} className="card">
                                <a rel="noreferrer" href={user.html_url} target="_blank">
                                <img alt="avatar" src={user.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;