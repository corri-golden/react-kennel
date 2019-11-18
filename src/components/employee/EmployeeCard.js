import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <picture>
            <img src={require('./chase.jpg')} alt="My Dog" />
          </picture>
          <h3>Employee Name: <span className="card-petname">Chase Fite</span></h3>
          <p>Office Manager</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;