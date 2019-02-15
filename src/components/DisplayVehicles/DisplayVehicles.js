import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import axios from "axios";



class DisplayVehicles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }


    secondary = green[500]; // #4caf50


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

    addVehicle = () => {
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
                        <TextField
                            id="vechicle"
                            label="vehicle"
                            value={vehicle.owner}
                            className="textField"
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        
                            <Button variant="contained" color="secondary" className="button" value={vehicle.id}>
                                Delete Vehicles
                                        </Button>
                        

                    </tr>
                    )
                })}

                {/* <TextField
                   id="vechicle"
                   label="vehicle"
                    // defaultValue="No Vehicles Added"
                    className="textField"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                />
                 */}
                <Button onClick={this.addVehicle} variant="contained" color="secondary" className="button" >
                    Add Vehicle
      </Button>

            </div>

        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapReduxStoreToProps)(DisplayVehicles);