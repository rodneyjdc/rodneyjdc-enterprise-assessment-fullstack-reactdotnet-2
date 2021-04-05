import React from 'react';
import samplePosts from '../sampleData';
import Post from './Post';
import { Component } from 'react';
import axios from 'axios';

class Feed extends Component {
  state = {
    blogs: [],
    clickedOnBlog: false,
  }

  componentDidMount() {
    axios.get(`https://127.0.0.1:5000/api/blogs`)
      .then(result => {
        this.setState({
          blogs: result.data
        });
      })
  }

  render() {
    return (
      <>
        {this.state.blogs
          .sort((a, b) => a.createdAt - b.createdAt)
          .map((blog, i) => (
            <div key={i}>
              <br></br>
              <Post key={i} allBlogs={this.state.blogs} data={blog} handleClick={this.props.handleClick}/>
              <br></br>
            </div>
          )
          )
        }
      </>
    )
  }
}

export default Feed;
