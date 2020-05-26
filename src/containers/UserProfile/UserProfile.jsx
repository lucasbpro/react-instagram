import React from 'react';

import './UserProfile.scss';

const UserProfile = ({userInfo}) => {
  return (
	
    <section data-testid="user-profile" className="profile">
	    <div className="container">
		    <div className="profile-data">
			    <div className="user">
				    <div className="user__thumb">
					    <img src={userInfo.avatar} alt={`profile-from-${userInfo.username}`}/>
				    </div>
				    <p className="user__name">{userInfo.name}<span>{`@${userInfo.username}`}</span></p>
			    </div>
		    </div>
	    </div>
    </section>
  )
};

export default UserProfile;
