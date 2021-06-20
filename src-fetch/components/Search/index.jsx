import axios from 'axios';
import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Search extends Component {
    // search = () => {
    //     PubSub.publish('sub', {
    //         name:'zhangsan',
    //         age: 18
    //     })
    // }
    search = async() => {
        const { keyWordElement: { value:keyWord } } = this
        PubSub.publish('sub',{
            loading: true,
            isFirst: false
        })
        //#region 
        // axios.get(`/api1/search/users?q=${keyWord}`).then(res => {
        //     PubSub.publish('sub',{
        //         users: res.data.items,
        //         loading: false
        //     })
        // }).catch(err => {
        //     PubSub.publish('sub',{
        //         error: err.message,
        //         loading: false
        //     })
        // })
        //#endregion
        // fetch(`/api1/search/users?q=${keyWord}`).then(res=>{
        //     return res.json()
        // }).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        try {
            const response = await fetch(`/api1/search/users?q=${keyWord}`)
            const data = await response.json()
            PubSub.publish('sub',{users: data.items,loading: false})
        } catch (error) {
            PubSub.publish('sub',{error: error.message,loading: false})
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="请输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
                </section>
        );
    }
}

export default Search;