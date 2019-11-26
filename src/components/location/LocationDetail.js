import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'




class LocationDetail extends Component {

    state = {
        name: "",
        loadingStatus: true,                       // setting load status to disable so user can't click discharge before the page loads
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    loadingStatus: false,                      // once the page is loaded we are changing the status so the discharge is accessible
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {             // added a discharge button
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./montreal.jpg')} alt="Montreal" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close</button>   
                </div>
            </div>
        );
    }
}


export default LocationDetail;