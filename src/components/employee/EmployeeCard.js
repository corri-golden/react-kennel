import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <picture>
            <img src={require('./chase.jpg')} alt="My Dog" />
          </picture>
          <h3>Employee Name: <span className="card-employeename">Chase Fite</span></h3>
          <p>Office Manager</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;