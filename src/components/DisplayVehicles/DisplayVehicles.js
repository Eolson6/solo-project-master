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


class DisplayVehicles extends Component {

 

secondary = green[500]; // #4caf50


    componentDidMount(){
        this.getVehicles();
    }

    getVehicles = ()=>{
        const action = {type: 'GET_VEHICLES'};
        this.props.dispatch(action);
    }


    render() {
        // const { classes } = props;
        return (
            <div>
                JSON.stringify({this.props.reduxStore.vehicleReducer.make})
                <TextField
                    id="vechicle"
                    label="vehicle"
                    defaultValue="No Vehicles Added"
                    className="textField"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                />
                
                <Button variant="contained" color="secondary" className="button">
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