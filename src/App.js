import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import User from './Components/User/User';
import Avatar from './Components/User/Avatar/Avatar';

const initialState = {
  route: 'homepage',
  input: '',
  isSignedIn: false,
  initializeUser: false,
  user: {
    starter_party_choice: [],
    id: '',
    pokemons: [],
    avatar: "",
    wins: 0, 
    badges: []
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        pokemons: data.pokemons,
        avatar: data.avatar,
        wins: 0,
        badges: []
      }   
    })
  }

  // initializeName = () => {
  //   this.setState(Object.assign(this.state.user.id, this.state.input));
  // }
  initializeName = () => {
    this.setState(Object.assign(this.state.user, { id: this.state.input }))
  }

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  startGame = () => {
    this.setState({isSignedIn: true});
  }
  endGame = () => {
    this.setState({isSignedIn: false});
  }

  onRouteChange = (route) => {
    if (route === 'homepage') {
      this.setState(initialState)
    } else if (route === 'start') {
      this.setState({initializeUser: true})
    }
    this.setState({route: route})
  }

  render () {
    // const {isSignedIn, onRouteChange} = this.state;

    return (
      <div className="App">
        <Navigation 
          isSignedIn={this.state.isSignedIn} 
          onRouteChange={this.onRouteChange}
          startGame={this.startGame} 
          endGame={this.endGame} 
              />    
        {
          !this.state.isSignedIn && this.state.route === 'homepage' ? 
          <div>
            <Homepage 
              isSignedIn={this.state.isSignedIn}
              onRouteChange={this.onRouteChange}
              startGame={this.startGame} 
              endGame={this.endGame} 
            />
          </div> :
          <User
           username={this.state.user.id}
           initializeName={this.initializeName}
           onInputChange={this.onInputChange}
           onRouteChange={this.onRouteChange}
           route={this.state.route}
           /> 
        }
        <Footer />
      </div>
    )
  }
}//end of App

export default App;
