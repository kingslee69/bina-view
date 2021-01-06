import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { animateUp, animateDown } from './utils/animate';
import Navbar from './components/navbar';
import AboutUs from './components/aboutUs';
import Projects from './components/projects';
import Team from './components/team';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Home from './components/home';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  state = {};

  render() {
    // animateUp();
    animateDown();
    return (
      <div className='container-fluid bg-light p-0'>
        <Navbar />
        <Switch>
          <Route path='/about-us' component={AboutUs} />
          <Route path='/projects' component={Projects} />
          <Route path='/team' component={Team} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/contact' component={Contact} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/home' component={Home} />
          <Redirect from='/' exact to='/home' />
          <Redirect to='not-found' />
        </Switch>
      </div>
    );
  }
}

export default App;
