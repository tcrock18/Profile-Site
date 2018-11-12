import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withGlobalState } from 'react-globally'

import '../App.css'

class Main extends Component {

  updateUserName = (userName) => {
    this.props.setGlobalState({
      userName: userName
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="enter-name">Tanner Crockett</h1>
          <hr className="main-hr"/>
          <div className="opening-text">
            <p className="enter-text">Front-End Javascript Developer</p>
          </div>
          <form>
            <label>
              Enter Name:
              <input type="text" name="name" />
            </label>
            <Link to="/home"><input type="submit" value="Enter Site" /></Link>
          </form>
            <button className="enter-site">Learn More</button>
        </header>
      </div>
    );
  }
}

export default withGlobalState(Main);