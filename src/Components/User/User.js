import React from 'react';
import './User.css';
import Name from './Name/Name';
import Avatar from './Avatar/Avatar';

const User = ({username, initializeName, onInputChange, onRouteChange, route}) => {
  return (
    <div>
      {route === "avatar" ? 
        <Avatar
          username={username}/> : 
        <Name
          initializeName={initializeName}
          onInputChange={onInputChange} 
          onRouteChange={onRouteChange}/>
          }
    </div>)
  }

export default User;