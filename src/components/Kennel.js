

import React, { Component } from 'react'        
import './Kennel.css'
// import AnimalCard from './animal/AnimalCard'
// import EmployeeCard from './employee/EmployeeCard'
// import LocationCard from './location/LocationCard'
// import OwnerCard from './owner/OwnerCard'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'


class Kennel extends Component {            //javascript object that has a single property - method called render that returns JSX.  JSX allows us to write javascript that looks like HTML.
                                            //consider each component as a factory function that returns an object.
  render() {
    return (
      <>
        <NavBar />
          <ApplicationViews />
        </>
    );
  }
}

export default Kennel