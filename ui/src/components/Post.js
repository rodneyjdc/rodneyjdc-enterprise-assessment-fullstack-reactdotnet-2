import React from 'react';
import { Component } from 'react';
import moment from 'moment';
import App from '../App'

class Post extends React.Component {

  render() {
    console.log("this.props", this.props)
    const createdAt = this.props.data.createdAt;
    return (
      <div className="post" >
        <h1 className="post-title" onClick={() => this.props.handleClick("post", this.props.data)}>{this.props.data.title}</h1>
        <div className="post-byline"><span className="post-byline-author">{this.props.data.author}</span> {moment(createdAt).fromNow()}</div>
        <img src={this.props.data.imageUrl} className="post-image" />
        <p>{this.props.data.body}</p>
      </div>
    )
  }
}

export default Post;
