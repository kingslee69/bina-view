import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import brandingImg from '../../images/branding.jpg';
// import strategyImg from '../../images/strategy.jpg';
// import digitalImg from '../../images/digital.jpg';

class Service extends Component {
  render() {
    return (
      <section className='row align-items-center mx-auto service-card'>
        <img className='service-img col-12 col-lg-6' src={brandingImg} alt='' />

        <article className='col-12 col-lg-6 p-4'>
          <h1 className='header'>{this.props.service.name}</h1>
          <p className='body mb-4'>{this.props.service.description}</p>

          <Link to='/contact' className='btn btn-info'>
            Start a project
          </Link>
        </article>
      </section>
    );
  }
}

export default Service;
