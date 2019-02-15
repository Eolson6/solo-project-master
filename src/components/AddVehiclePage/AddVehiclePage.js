import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import { timingSafeEqual } from 'crypto';
import { withRouter } from 'react-router';


class AddVehiclePage extends Component {

    addNewVehicle = () =>{
        const newVehicle = {
            make: this.state.make,
            year: this.state.year,
            model: this.state.model,
            license: this.state.license,
            vin: this.state.vin,
            owner: this.state.owner
        }
        const action = { type: 'ADD_NEW_VEHICLE', payload: newVehicle};
        console.log('in add vehicle page', newVehicle);
        
        this.props.dispatch(action);
        this.props.history.push('newIncident')

    }

     styles = theme => ({
        button: {
            margin: theme.spacing.unit,
        },
        input: {
            display: 'none',
        },
    });

    state = {
        make: '',
        year: '',
        model: '',
        license: '',
        vin: '',
        owner: ''

    };

    handleChange = make => event => {
        // console.log('make', this.state);
        
        this.setState({ 
            [make]: event.target.value
         });
    };

    handleChange = year => event => {
        // console.log('year', this.state);

        this.setState({
            [year]: event.target.value
        });
    };

    handleChange = model => event => {
        // console.log('model', this.state);

        this.setState({
            [model]: event.target.value
        });
    };

    handleChange = license => event => {
        // console.log('license', this.state);

        this.setState({
            [license]: event.target.value
        });
    };

    handleChange = vin => event => {
        // console.log('vin', this.state);

        this.setState({
            [vin]: event.target.value
        });
    };
    handleChange = owner => event => {
        // console.log('owner', this.state);

        this.setState({
            [owner]: event.target.value
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <form className="text" noValidate autoComplete="off">
                <TextField
                    id="year"
                    label="Year"
                    value={this.state.value}
                    // value="2015"
                    onChange={this.handleChange('year')}
                    margin="normal"
                />
            <TextField
                id="make"
                label="Make"
                value={this.state.value}
                // value="ford"
                onChange={this.handleChange('make')}
                margin="normal"
            />
                <TextField
                    id="model"
                    label="Model"
                    value={this.state.value}
                    // value="explorer"
                    onChange={this.handleChange('model')}
                    margin="normal"
                />
                <TextField
                    id="license"
                    label="License Plate"
                    value={this.state.value}
                    // value="390338"
                    onChange={this.handleChange('license')}
                    margin="normal"
                />
                <TextField
                    id="vin"
                    label="VIN"
                    value={this.state.value}
                    // value="293438"
                    onChange={this.handleChange('vin')}
                    margin="normal"
                />
                <TextField
                    id="owner"
                    label="Owner"
                    value={this.state.value}
                    // value="Tim Tebow"
                    onChange={this.handleChange('owner')}
                    margin="normal"
                />

                <Button onClick={this.addNewVehicle} variant="outlined" color="primary" className="button" Link to="/newIncident">
                    Submit
                    </Button>
                 </ form >

         
        );
    }
}

// TextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
// };


const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(AddVehiclePage);