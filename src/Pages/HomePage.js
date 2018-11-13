import React, {Component} from 'react';

import Navigation from '../components/Navigation'
import { withGlobalState } from 'react-globally'


class HomePage extends Component {
  render() {
    return (
      <div className="body">
          <Navigation />

          <div className="home-page">
            <div className="home-welcome-text">
              <h1>{this.props.globalState.userName}, Welcome To My Site.</h1>
              <hr />
              <p>I am a full stack Javascript developer with a focus on front-end development.</p>
              <p>A few of my favorite frameworks include:</p>
              <div>
                <a rel="noopener noreferrer" target="_blank" href="https://reactjs.org/"><img src="./react-logo.png" alt="react js" className="react-logo"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://facebook.github.io/react-native/"><img src="./react-native-logo.png" alt="react js" className="react-native-logo"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://graphql.org/"><img src="./graphql.jpeg" alt="react js" className="graphql-logo"/></a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.mongodb.com/"><img src="./mongodb-logo.png" alt="react js" className="mongo-logo"/></a>
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default withGlobalState(HomePage);