import React from 'react';

import Post from '../../components/Post';

const Posts = ({posts, getUserInfo}) => (
  <div data-testid="posts" className="container">

    {posts.length>0?
      posts.map( post => {
        const userInfo = getUserInfo(post.userId);
        return <Post key={post.id} postInfo={post} userInfo={userInfo}/>
      })
      : null
    }

  </div>
);

export default Posts;
