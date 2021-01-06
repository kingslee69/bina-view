import React, { Component } from 'react';
import { getServices } from './../services/fakeBrandService';
import Service from './common/service';

class AboutUs extends Component {
  state = {
    services: getServices(),
  };

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          {this.state.services.map(service => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUs;
