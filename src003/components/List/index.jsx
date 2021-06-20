import React, { Component } from 'react';

class List extends Component {    
    render() {
        const {users,isFirst,loading,error} = this.props
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