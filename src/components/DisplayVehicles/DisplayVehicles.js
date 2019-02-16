import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class DisplayVehicles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }



    componentDidMount() {
        this.getVehicles();
    }

    getVehicles = () => {
        const action = { type: 'GET_VEHICLES' };
        this.props.dispatch(action);
        console.log('action', action);


    }

    deleteVehicle = (event) => {
        console.log('in delete vehicle', event.target.value);
        this.setState({
            id: event.target.value
        });
        const action = { type: 'DELETE_VEHICLE', payload: event.target.value }
        this.props.dispatch(action)
        //reloads page after dispatch
        window.location.reload()
    }

    //talks to saga with action type- gets info from reducer
    // handleDeleteID = (event) => {
    //     console.log('handleDeleteImages', {id: event.target.value });
    //     this.setState({
    //         id: event.target.value
    //     });
    // }

    goToAddNewVehicle = () => {
        this.props.history.push('vehicle')
    }

    render() {

        return (
            <div>

                {/* {JSON.stringify(this.props.reduxStore.vehicleReducer.vehicleReducer.items)} */}
                {/* <h1>{this.props.reduxStore.vehicleReducer}</h1> */}


                {this.props.reduxStore.vehicleReducer.vehicleReducer.map((vehicle, i) => {
                    return (<tr key={i}>
                        {/* <td>{vehicle.owner}</td> */}
                        <h1>{vehicle.owner}</h1>
                    
                        
                        <button class="button-delete" onClick={this.deleteImage} value={vehicle.id}>
                                Delete Vehicles
                                        </button>
                        

                    </tr>
                    )
                })}

           
                
                <button class="button-add" onClick={this.goToAddNewVehicle} >
                    Add Vehicle
      </button>

            </div>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(DisplayVehicles);