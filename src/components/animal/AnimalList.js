import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: [],
  }

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state.
    AnimalManager.getAll()
      .then((animals) => {
        this.setState({
          animals: animals
        })
      })
  }
  deleteAnimal = id => {                  // deleteAnimal method. run get all to get all and then set state that contains objects with new data
    AnimalManager.delete(id)
      .then(() => {
        AnimalManager.getAll()
          .then((newAnimals) => {
            this.setState({
              animals: newAnimals
            })
          })
      })
  }

  render() {

    console.log("AnimalList: Render");
    //console.log between render and return.  animal.id is id from api
    return (
      <React.Fragment>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { this.props.history.push("/animals/new") }}>
          Admit Animal
  </button>
      </section>
      <div className="container-cards">
        {this.state.animals.map(animal =>                              // iterate over the animal data with map
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
            {...this.props}
          />
        )}
      </div>
      </React.Fragment >
    )
  }
}

export default AnimalList