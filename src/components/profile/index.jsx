import React from "react";

import "./style.css";

const Profile = ({user}) => {
  if (!user) {
    return null;
  }
  return (
    
    <div className="profile-card">
      <div className="profile">
        <img src={user.avatar_url} className="photo-profile" alt={user.name} />
        <div>
       
          <h3>{user.name}</h3>
          <h5>@{user.login}</h5>
          <p>{user.bio ? user.bio : `O usuario ${user.name} não possui bio`}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
