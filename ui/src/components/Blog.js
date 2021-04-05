import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Blog(props) {
  return (
    <div className="post" >
      <h1 className="post-title">
        </h1>
      <div className="post-byline"><span className="post-byline-author"></span></div>
      <img className="post-image" />
      <p>hello</p>
    </div>
  )
}

export default Blog;
