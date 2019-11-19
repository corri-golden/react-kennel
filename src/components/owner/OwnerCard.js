import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./owner.jpg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Owned for Six Months</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;