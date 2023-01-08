import React from 'react';
import './AvatarIcon.css';

const AvatarIcon = ({imageUrl}) => {
  return (
    <div className='main-avatar-area-div'>
      <div className='main-avatar-area'>
        <div className='icon-background'>
          <img src={imageUrl} className="avatar-img" alt="avatar"/>
        </div>
      </div>
    </div>
  )
}

export default AvatarIcon;