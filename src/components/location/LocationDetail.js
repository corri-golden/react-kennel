import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'




class LocationDetail extends Component {

    state = {
        name: "",
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./montreal.jpg')} alt="Montreal" />
                    </picture>
                    <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                </div>
            </div>
        );
    }
}


export default LocationDetail;