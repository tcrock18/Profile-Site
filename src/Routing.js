import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './Pages/MainPage'
import AboutPage from './Pages/AboutPage'
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import ResumePage from './Pages/ResumePage'
import ContactPage from './Pages/ContactPage'
import NotFoundPage from './Pages/NotFoundPage'

class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default Routing;