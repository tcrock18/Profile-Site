import React, {Component} from 'react';

import Navigation from '../components/Navigation'


class HomePage extends Component {
  render() {
    return (
      <div>
          <Navigation />

          <div className="home-page">
            <img src="./fam.jpg" alt="fam" className="home-image"/>
            <div className="home-welcome-text">
              <h1>Welcome to my site</h1>
              <p>My name is Tanner Crockett, I am a front-end focused Javascript developer.

              </p>
            </div>
          </div>
        
      </div>
    );
  }
}

export default HomePage;