import React from "react";
import AvatarIcon from "./AvatarIcon";
import './AvatarList.css';

const AvatarList = ({avatarListLinks}) => {
  return (
    <div className="avatar-area">
      {
        avatarListLinks.map((avatar, i) => {
          return (
            <AvatarIcon
              key={i}
              imageUrl={avatarListLinks[i][i]}
              />
          );
        })}
      
    </div>
  )
}

export default AvatarList;