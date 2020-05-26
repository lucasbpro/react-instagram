import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';
import './UsersList.scss';

// UserList container receives a list of users
const UsersList = ({users}) => {

  return (
    <section data-testid="user-list" className="users-list">
        {users.length > 0 ?
        users.map(user => (<User infoUser={user}/>))
        : <Loading/>}
    </section>
  )
};

export default UsersList;
