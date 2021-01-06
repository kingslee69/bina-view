import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import menu from '../images/menu.svg';
import close from '../images/close.svg';

class Navbar extends Component {
  state = {
    dropdown: false,
  };

  handleMenuState = () => {
    if (this.state.dropdown === false) {
      this.setState({ dropdown: true });
    } else {
      this.setState({ dropdown: false });
    }
  };

  getNavClasses = () => {
    let classes = 'nav-dropdown ';
    !this.state.dropdown ? (classes += 'desktop ') : (classes += '');
    return classes;
  };

  getButtonClasses = () => {
    let classes = 'btn btn-sm btn-info';
    !this.state.dropdown ? (classes += ' desktop') : (classes += ' ');
    return classes;
  };

  render() {
    return (
      <nav
        style={{ backgroundColor: '#fff', padding: 0 }}
        className='container-fluid navbar-light sticky nav'
      >
        {/* Navbar Brand */}
        <div className='container navbar animate-down'>
          <Link to='/home' className='navbar-brand'>
            <img src={logo} alt='Binaview logo' />
          </Link>

          {/* mobile navbar menu icon */}
          <button
            onClick={this.handleMenuState}
            style={{}}
            className='btn btn-light mobile'
          >
            {' '}
            {!this.state.dropdown ? (
              <img src={menu} alt='nav menu' />
            ) : (
              <img src={close} alt='close nav' />
            )}
          </button>

          {/* the nav links */}
          <div onClick={this.handleMenuState} className={this.getNavClasses()}>
            <Link to='/about-us' className='nav-item m-2 '>
              about us
            </Link>
            <Link to='/projects' className='nav-item m-2 '>
              projects
            </Link>
            <Link to='/team' className='nav-item m-2 '>
              team
            </Link>
            <Link to='/blogs' className='nav-item m-2'>
              Blogs
            </Link>
          </div>

          {/*the nav contact link */}
          <Link
            onClick={this.handleMenuState}
            to='/contact'
            id='nav-contact'
            className={this.getButtonClasses()}
          >
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
