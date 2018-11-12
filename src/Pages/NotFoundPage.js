import React, {Component} from 'react';

import Navigation from '../components/Navigation'

class NotFoundPage extends Component {
  render() {
    return (
      <div>
          <Navigation />
        <h1>Sorry Page Not Found</h1>
      </div>
    );
  }
}

export default NotFoundPage;