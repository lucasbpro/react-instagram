import React, {useState,useEffect} from 'react';

import UsersList from '../../containers/UsersList/UsersList';
import {getUsers} from '../../service'

const UsersRoute = () => {

  const [usersList, setUsersList] = useState([]);

  // requests a lit of users from API
  useEffect(() => {
    getUsers().then(setUsersList);
  },[]);

  // renders the list of users
  return (
    <div data-testid="users-route" className="container">
      <UsersList users={usersList}/>
    </div>
  );
};

export default UsersRoute;
