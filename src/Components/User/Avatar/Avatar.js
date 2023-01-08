import React from 'react';
import './Avatar.css';
import '../Name/Name.css';
import AvatarList from './AvatarList';

const Avatar = ({username}) => {
  let avatarListLinks = [
    {0: "https://cdn-icons-png.flaticon.com/512/1752/1752813.png"},
    {1: "https://cdn-icons-png.flaticon.com/512/1752/1752707.png"},
    {2: "https://cdn-icons-png.flaticon.com/512/1752/1752711.png"},
    {3: "https://cdn-icons-png.flaticon.com/512/1752/1752691.png"},
    {4: "https://cdn-icons-png.flaticon.com/512/1752/1752735.png"},
    {5: "https://cdn-icons-png.flaticon.com/512/1752/1752835.png"},
    {6: "https://cdn-icons-png.flaticon.com/512/1752/1752791.png"},
    {7: "https://cdn-icons-png.flaticon.com/512/1752/1752867.png"},
  ]
 return ( 
  <div className='user-main-div'>
  <div className='chat-box pikachu-chat avatar-chat'>
    <img
      className='chat-icon' 
      src="https://cdn-icons-png.flaticon.com/512/528/528098.png"
      alt='pikachu'
    />
    <div className='header'>
      <h5>PIKACHU</h5>
      <img 
      className='mini-icon'
      src="https://cdn-icons-png.flaticon.com/512/664/664883.png" 
      alt="battery"/>
    </div>
    <div className='description-box'>
      <p>Nice to meet you, {username}!</p>
    </div>
    <p className='instruction'>pick your avatar and press the pokeball button below once you are done</p>
    <div className='avatar-list'>
      < AvatarList avatarListLinks={avatarListLinks}/>
    </div>
    <div className='bottom-div-avatar'>
      <img
        alt="heart"
        className='mini-icon' 
        src='https://cdn-icons-png.flaticon.com/512/2995/2995520.png' 
      />
      <button className='poke-button'></button>
      <img
        alt="heart"
        className='mini-icon' 
        src='https://cdn-icons-png.flaticon.com/512/2995/2995520.png' 
      />
    </div>
  
  </div>
</div>)
}

export default Avatar;