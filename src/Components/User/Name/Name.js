import React from 'react';
import './Name.css';

const Name = ({initializeName, onInputChange, onRouteChange}) => {
  return (
    <div className='user-main-div'>
      <div className='chat-box pikachu-chat'>
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
          <p>Thank you so much for playing my game! What is your name?</p>
        </div>
        <img
          alt="heart"
          className='homepage-icon' 
          src='https://cdn-icons-png.flaticon.com/512/2995/2995520.png' 
        />
      </div>
      <div className='chat-box trainer-chat'>
        <div className='header'>
          <h5>TRAINER</h5>
          <img 
          className='chat-icon'
          src="https://cdn-icons-png.flaticon.com/512/189/189001.png" 
          alt="battery"/>
        </div>
        <div className='description-box'>
          <div>
            <form >
            <label htmlFor='username'>First name:</label>
              <input 
                type="text" 
                id="username" 
                name="fname"
                onChange={onInputChange}
                />
            </form>
          </div>
          <div>
            <button 
              type='button' 
              onClick={() => {
                initializeName();
                onRouteChange("avatar");
              }}
              className='go-button'>
                GO
            </button>
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Name;