import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withGlobalState } from 'react-globally'

import '../App.css'

class Main extends Component {

  updateUserName = (e) => {
    this.props.setGlobalState({
      userName: e.target.value
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
              <input className="enter-input" type="text" placeholder="Enter Your Name" value={this.props.globalState.userName} onChange={this.updateUserName}/>
            <br />
            <Link to="/home"><input type="submit" value="Continue" className="enter-site"/></Link>
          </form>
        </header>
      </div>
    );
  }
}

export default withGlobalState(Main);