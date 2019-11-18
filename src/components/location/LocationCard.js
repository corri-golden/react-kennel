import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Location Name: <span className="card-petname">Chase's Apartment</span></h3>
          <p>Tha Spot</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;