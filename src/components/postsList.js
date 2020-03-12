import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class PostList extends Component {
    state = {
        postList: [],
    }

   componentDidMount() {fetch('https://jsonplaceholder.typicode.com/posts')  
        .then(response => response.json())   
        .then(response =>this.setState({postList: response }));
    }

    renderPosts = () => 
        this.state.postList.map((element) => {
            return <div key={element.id}>
                <Link to={`/post/${element.id}`}>{element.title}</Link>
            </div>
           
        })
    render() {
        return <div>
            {this.renderPosts()}
        </div>
    }
}

export default PostList