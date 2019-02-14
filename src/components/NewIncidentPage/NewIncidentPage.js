import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import DisplayWitnesses from '../DisplayWitnesses/DisplayWitnesses';
import DisplayImages from '../DisplayImages/DisplayImages';
import DisplayVehicless from '../DisplayVehicles/DisplayVehicles';
import { Route, withRouter } from 'react-router-dom';



class NewIncidentPage extends Component {

componentDidMount() {
    this.getincidentItems();
}

getincidentItems=()=>{
    const action ={type: 'GET_INCIDENT_ITEMS'};
    this.props.dispatch(action);
}

    addNewVehicle = (event) => {
        this.props.history.push('vehicle');
    }

    render() {
        // const { classes } = props;
        return (
            <div>
                <DisplayImages />
                <DisplayVehicless addNewVehicle={this.addNewVehicle}/>
                <DisplayWitnesses/>
            </div>

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NewIncidentPage);