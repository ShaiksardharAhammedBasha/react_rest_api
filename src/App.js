import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor () {
    super() 
    this.state = {
      username: ''
    }
      this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    axios.get('https://api.github.com/users/maecapozzi')
    .then( res => this.setState( {username: res.data.name } ))
  }

  render() {
    return(
      <div className='button_container'>
        <button className='button' onClick = { this.handleClick }> Click Me </button>
          <p> { this.state.username }</p>
      </div>
    )
  }

}

export default App;