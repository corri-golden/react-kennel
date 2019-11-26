import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import Login from './auth/Login'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationEditForm from './location/LocationEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  // isAuthenticated = () => localStorage.getItem("credentials") !== null    // checks to see if the user has logged in.


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          console.log("Props from react-router-dom", props)  // props from react-router-dom.
          console.log("this components's props", this.props)
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            // history={props.history}
            // match={props.match}
            //location={props.location}
            {...props}     // this props is different.  this is components props.  they are two different objects
          />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />

        {/*
  This is a new route to handle a URL with the following patterns:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route exact path="/locations" render={(props) => {
          if (this.props.user) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="login" />
          }
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />
        <Route
          path="/locations/:locationId(\d+)/edit" render={props => {
            return <LocationEditForm {...props} />
          }}
        />
        <Route exact path="/employees" render={props => {
            return <EmployeeList {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route path="/owners" render={(props) => {
            return <OwnerList {...props} />
        }} />
        <Route path="/login" render={(props) => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />       
      </React.Fragment>
    )
  }
}

export default ApplicationViews