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


class AddFactsPage extends Component {

    addFacts = () => {
        // const newFacts = {
        //     location: this.state.location,
        //     type: this.state.type,
        //     time: this.state.time,
        //     date: this.state.date,
        //     notes: this.state.notes
            
        // }
        const action = { type: 'ADD_NEW_FACT', payload: this.state };
        this.props.dispatch(action);
        this.props.history.push('newIncident')
        // const action = { type: 'ADD_NEW_FACT', payload: newFacts };
        // console.log('in add facts page', newFacts);

        // this.props.dispatch(action);
        // this.props.history.push('newFacts')

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
        location: '',
        type: '',
        time: '',
        date: '',
        notes: '',

    };

    handleChange = location => event => {
        // console.log('make', this.state);

        this.setState({
            [location]: event.target.value
        });
    };

    handleChange = type => event => {
        // console.log('year', this.state);

        this.setState({
            [type]: event.target.value
        });
    };

    handleChange = time => event => {
        // console.log('model', this.state);

        this.setState({
            [time]: event.target.value
        });
    };

    handleChange = date => event => {
        // console.log('license', this.state);

        this.setState({
            [date]: event.target.value
        });
    };

    handleChange = notes=> event => {
        // console.log('vin', this.state);

        this.setState({
            [notes]: event.target.value
        });
    };
 
    render() {
        const { classes } = this.props;
        return (
            <form className="text" noValidate autoComplete="off">
                <TextField
                    id="location"
                    label="Location"
                    value={this.state.value}
                    // value="2015"
                    onChange={this.handleChange('location')}
                    margin="normal"
                />
                <TextField
                    id="type"
                    label="Type"
                    value={this.state.value}
                    // value="ford"
                    onChange={this.handleChange('type')}
                    margin="normal"
                />
                <TextField
                    id="time"
                    label="Time"
                    value={this.state.value}
                    // value="explorer"
                    onChange={this.handleChange('time')}
                    margin="normal"
                />
                <TextField
                    id="date"
                    label="Date"
                    value={this.state.value}
                    // value="390338"
                    onChange={this.handleChange('date')}
                    margin="normal"
                />
                <TextField
                    id="notes"
                    label="Notes"
                    value={this.state.value}
                    // value="293438"
                    onChange={this.handleChange('notes')}
                    margin="normal"
                />
        

                <Button onClick={this.addFacts} variant="outlined" color="primary" className="button" Link to="/newIncident">
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

export default connect(mapStateToProps)(AddFactsPage);