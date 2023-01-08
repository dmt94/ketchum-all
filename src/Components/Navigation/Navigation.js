import React from 'react';
import './Navigation.css';
import Header from './Header';

const Navigation = ({isSignedIn, onRouteChange, startGame, endGame}) => {
  return (
    <div>
      <Header 
        isSignedIn={isSignedIn} 
        onRouteChange={onRouteChange} 
        startGame={startGame}
        endGame={endGame}
        />
    </div>
    
  )

}

export default Navigation;