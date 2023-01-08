import React from 'react';
import './Navigation.css';

const Header = ({isSignedIn, onRouteChange, startGame, endGame}) => {
  return (
    <nav className='navbar'>
      <p>A SIMPLE KETCHUM ALL</p>
      { isSignedIn === false ?
        <p 
          onClick={() => {
            onRouteChange('create-user');
            startGame();
          }}
          className='start-end'
          >{">>"}
            </p>
       : <p
          onClick={() => {
            onRouteChange('homepage');
            endGame();
          }}
          className='start-end'
          >END
          </p> 
      }
    </nav>
    
  )
}

export default Header;