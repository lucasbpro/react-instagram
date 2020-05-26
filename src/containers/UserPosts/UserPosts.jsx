import React from 'react';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts" >
    <section className="user-posts">
      {posts.map( post => {
        return( 
          <article className="post" data-testid="post">
            <figure className="post__figure">
              <img src={post.imageUrl} alt={post.id}/>
            </figure>
          </article>
        )
      })}
    </section>
  </div>
);

export default UserPosts;
