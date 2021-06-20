import axios from 'axios';
import React, { Component } from 'react';

class Search extends Component {
    search = () => {
        const { keyWordElement: { value:keyWord } } = this
        this.props.updateAppState({
            loading: true,
            isFirst: false
        })
        // `https://api.github.com/search/users?q=${keyWord}`
        axios.get(`/api1/search/users?q=${keyWord}`).then(res => {
            this.props.updateAppState({
                users: res.data.items,
                loading: false
            })
        }).catch(err => {
            this.props.updateAppState({
                error: err.message,
                loading: false
            })
        })
    }
    render() {
        let obj = {a: {b: {c: 1}}}
// console.log(obj.a.b.c)

const {a: {b: {c}}} = obj
console.log(c)
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