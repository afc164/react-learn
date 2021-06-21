import React, { Component } from 'react';

const DetailData = [
    {id:'01', content: '你好，我是01的内容'},
    {id:'02', content: '你好，我是02的内容'},
    {id:'03', content: '你好，我是03的内容'},
]

class index extends Component {
    render() {
        console.log(this.props)
        // const { id, title} = this.props.match.params
        // const {id,title} = qs.parse(this.props.location.search.slice(1))

        const {id,title}= this.props.location.state || {}
        const findResult = DetailData.find(obj => {
            return obj.id === id
        }) || {}
        return (
            <ul>
                <li>ID: {id}</li>
                <li>title: {title}</li>
                <li>Content: {findResult.content}</li>
            </ul>
        );
    }
}

export default index;