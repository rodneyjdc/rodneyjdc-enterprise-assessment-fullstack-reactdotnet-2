import React from 'react';
import samplePosts from '../sampleData';
import Post from './Post';

const Feed = (props) => (
  samplePosts.map(post => <Post data={post}/>)


  // <div className="feed">
  //   <ul>
  //     <li className="feed-list-item">
  //       <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
  //       <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
  //       <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
  //       <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
  //     </li>
  //     <li className="feed-list-item">
  //       <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
  //       <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
  //       <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
  //       <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
  //     </li>
  //     <li className="feed-list-item">
  //       <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
  //       <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
  //       <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
  //       <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
  //     </li>
  //     <li className="feed-list-item">
  //       <div className="feed-list-item-title" onClick={props.handleClick}>This is an example blog post title.</div>
  //       <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">Bob Loblaw</span> 3 days ago</div>
  //       <img src="http://www.placecorgi.com/350/197" onClick={props.handleClick} className="feed-list-item-image"/>
  //       <span className="feed-list-item-lede">Here is the opening paragraph to a hard-coded blog post, which contains the lede. These posts are hardcoded into the Feed component. You should refactor this component so it dynamically renders Feed Items (blog post previews). You can use the provided sample data to get started. </span>
  //     </li>
  //   </ul>
  // </div>
);

export default Feed;
