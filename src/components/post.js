import React, { Component } from 'react';



class  Post extends Component {
state = { 
  postList: {}
}


componentDidMount() {fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)  
.then(response => response.json())   
.then(response =>this.setState({postList: response }));
}

  render(){
    return (
      <div>
       <h2>{this.state.postList.title}</h2>
       <p></p>
    </div>
    );
  }
  }
    

  export default Post