import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./montreal.jpg')} alt="My city" />
          </picture>
          <h3>Location Name: <span className="card-locationName">{this.props.location.name}</span></h3>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;