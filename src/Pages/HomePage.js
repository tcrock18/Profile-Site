import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation'
import { withGlobalState } from 'react-globally'


class HomePage extends Component {
  render() {
    return (
      <div className="body">
          <Navigation />

          <div className="home-page">
            <div className="home-welcome-text">
              <h1>Welcome {this.props.globalState.userName}</h1>
              <hr className="small-hr" />
              <p>I am a full stack Javascript developer with a passion for front-end development.</p>
            </div>

            <div className="home-page-main">
              <p>I enjoy learning new technology and frameworks. Currently, a few of my favorite frameworks to 
                build my projects with include:</p>
              <div className="framework-logos">
                <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/"><img src="./react-logo.png" alt="react js" className="react-logo"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://facebook.github.io/react-native/"><img src="./react-native-logo.png" alt="react js" className="react-native-logo"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://graphql.org/"><img src="./graphql.jpeg" alt="react js" className="graphql-logo"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.mongodb.com/"><img src="./mongodb-logo.png" alt="react js" className="mongo-logo"/></a>
              </div>
              <div className="more-projects">
                <p>See projects I have built using these technologies and more.</p>
                <Link to="/projects"><button className="page-button">See Projects</button></Link>
              </div>
            </div>
            
            <div className="home-about">
              <h2>Let's Get Personal</h2>
              <hr className="small-hr" />
              <p>Learn more about me and what I enjoy in my free time.</p>
              <div className="home-about-images">
                <div className="home-about-image">
                  <img src="./fam.jpg" alt="fam" />
                  <p>My Family Picture</p>
                </div>
                <div className="home-about-image">
                  <img src="./fam.jpg" alt="fam" />
                  <p>My Family Picture</p>
                </div>
                <div className="home-about-image">
                  <img src="./fam.jpg" alt="fam" />
                  <p>My Family Picture</p>
                </div>
              </div>
              <div className="about-me-button">
                <Link to="/about"><button className="page-button">More About Me</button></Link>
              </div>
            </div>

          </div>
        
      </div>
    );
  }
}

export default withGlobalState(HomePage);