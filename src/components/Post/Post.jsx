import React, { useState } from 'react';
import { sprintf } from 'sprintf-js';
import { Link } from 'react-router-dom';

import './Post.scss';

import {LABEL_BUTTON_FOLLOWING, 
        LABEL_BUTTON_NOT_FOLLOWING,
        LABEL_POST_LIKES_1,
        LABEL_POST_LIKES_2,
        LABEL_POST_LIKES_3} from '../../constants';

const Post = ({ postInfo, userInfo }) => {

  // these states are used to render post like and follow buttons
  const [isLiked, setLiked] = useState(false);
  const [isFollowing, setFollowing] = useState(false);
  
  return (

      <article data-testid="post" className="post">
        <header className="post__header">
        
          <div className="user">
            <Link className="user__thumb" to={`/users/${userInfo.username}`}>
              <img src={userInfo.avatar} alt={userInfo.name} />
            </Link>

            <Link className="user__name" to={`/users/${userInfo.username}`}>
            {userInfo.name}
            </Link>
          </div>
          
          <button className="post__context" onClick={()=>setFollowing(!isFollowing)}>
            {isFollowing? <span className="follow-btn is-following"> {LABEL_BUTTON_FOLLOWING} </span>
                        : <span className="follow-btn"> {LABEL_BUTTON_NOT_FOLLOWING} </span>
            }
          </button>
        </header>
    
        <figure className="post__figure">
          <img src={postInfo.imageUrl} alt={`post-from-${userInfo.username}`}/>
        </figure>
    
        <nav className="post__controls">
          <button className="post__control" onClick={()=>setLiked(!isLiked)}>
              {isLiked ? <i className="fas fa-heart" /> : <i className="far fa-heart" /> }
          </button>
      
          <div className="post__status">
            <div className="user">
              <span>{LABEL_POST_LIKES_1} 
                <Link to="/">
                Amigo
                </Link>        
                {sprintf(LABEL_POST_LIKES_2, postInfo.likes.length>1 ? "s":"")}
                <Link to="/">
                  {`${postInfo.likes.length} ${sprintf(LABEL_POST_LIKES_3, postInfo.likes.length>1 ? "s":"")}`}
                </Link>
              </span>
            </div>
          </div>
        </nav>
      </article>
    
  );
};

export default Post;
