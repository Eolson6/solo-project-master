import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';


class AddWitnessPage extends Component {

    addNewWitness = (event) => {

        const action = { type: 'ADD_NEW_WITNESS', payload: this.state };
        this.props.dispatch(action);
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
        name: '',
        phone: '',
        street: '',
        unit: '',
        city: '',
        state: '',
        zip: ''

    };

    handleChange = name => event => {
        console.log('name', this.state);

        this.setState({
            [name]: event.target.value
        });
    };

    handleChange = phone => event => {
        console.log('phone', this.state);

        this.setState({
            [phone]: event.target.value
        });
    };

    handleChange = street => event => {
        console.log('street', this.state);

        this.setState({
            [street]: event.target.value
        });
    };

    handleChange = unit => event => {
        console.log('unit', this.state);

        this.setState({
            [unit]: event.target.value
        });
    };

    handleChange = city => event => {
        console.log('city', this.state);

        this.setState({
            [city]: event.target.value
        });
    };
    handleChange = state => event => {
        console.log('state', this.state);

        this.setState({
            [state]: event.target.value
        });
    };

    handleChange = zip => event => {
        console.log('zip', this.state);

        this.setState({
            [zip]: event.target.value
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <form className="text" noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    value={this.state.value}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="phone"
                    label="Phone Number"
                    value={this.state.value}
                    onChange={this.handleChange('phone')}
                    margin="normal"
                />
                <TextField
                    id="street"
                    label="Street"
                    value={this.state.value}
                    onChange={this.handleChange('street')}
                    margin="normal"
                />
                <TextField
                    id="unit"
                    label="Unit"
                    value={this.state.value}
                    onChange={this.handleChange('unit')}
                    margin="normal"
                />
                <TextField
                    id="city"
                    label="City"
                    value={this.state.value}
                    onChange={this.handleChange('city')}
                    margin="normal"
                />
                <TextField
                    id="state"
                    label="State"
                    value={this.state.value}
                    onChange={this.handleChange('state')}
                    margin="normal"
                />

                <TextField
                    id="zip"
                    label="Zip"
                    value={this.state.value}
                    onChange={this.handleChange('zip')}
                    margin="normal"
                />
                <div>
                    <Button onClick={this.addNewWitness} variant="outlined" color="primary" className="button">
                        Submit
                    </Button>
                </div>

            </ form >

        );
       
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AddWitnessPage );