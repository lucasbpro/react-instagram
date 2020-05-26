import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';
import { getUserByUsername, getPosts } from '../../service';

const ProfileRoute = () => {

  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

   // requests user to API by searching for username
   useEffect(() => {
    const { pathname } = window.location;
    const username = pathname.split("/")[2];
    getUserByUsername(username).then((data) => setUser(...data));
  },[]);

  // requests all posts from user=username
  useEffect(() => {
    getPosts([user.id]).then(setUserPosts).then(setLoading(false));
  },[user]);

  return (
    <div data-testid="profile-route">
      { isLoading? <Loading/> : <UserProfile userInfo={user}/>}
      { isLoading? <Loading/> : <UserPosts posts={userPosts}/> }
    </div>
  );
};

export default ProfileRoute;
