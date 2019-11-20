import React, { Component } from 'react';
import "./Animal.css"

class AnimalCard extends Component {            // for the button below calling the method for props and passing id for the animal.  its a function definition. 
  render() {
    return (
      <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./dog.svg')} alt="My Dog" />
            </picture>
            <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
            <p>Breed: {this.props.animal.breed}</p>
            <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}
            >Discharge</button>
          </div>
      </div>
    );
  }
}

export default AnimalCard;