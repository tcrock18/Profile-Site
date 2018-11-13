import React, {Component} from 'react';

import Navigation from '../components/Navigation'
import { withGlobalState } from 'react-globally'

class ProjectsPage extends Component {
  render() {
    return (
      <div>
          <Navigation />
        <h1>Projects Page {this.props.globalState.userName}</h1>
      </div>
    );
  }
}

export default withGlobalState(ProjectsPage);