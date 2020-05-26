import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';
import Posts from '../../containers/Posts';
import {getUsers, getPosts, getStories} from '../../service'

import './FeedRoute.scss';

const FeedRoute = () => {

  const [stories, setStories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [usersList, setUsersList] = useState([]);

  // requests user list to API
  useEffect(() => {
    getUsers().then(setUsersList);
  },[]);

  // requests posts from all users 
  useEffect(() => {
    const userIds = usersList.map(user => user.id);
    getPosts(userIds).then(setPosts).then(setLoading(false));
  },[usersList]);

  // requests stories to API
  useEffect(() => {
      getStories().then(setStories);
  },[]);

  // function used to retrieve user info already fetched by useEffect
  const getUserInfo = (userId) => usersList.find(user => user.id === userId);

  return (
    <div data-testid="feed-route">

      {stories.length > 0? <Stories stories={stories} getUserInfo={getUserInfo}/> : null}

      {isLoading && <Loading/>}
      
      {posts.length > 0 && <Posts posts={posts} getUserInfo={getUserInfo} />}
    </div>
  );
};

export default FeedRoute;
