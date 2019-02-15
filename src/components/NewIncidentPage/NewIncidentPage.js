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
import DisplayFacts from '../DisplayFacts/DisplayFacts'
import { Link } from 'react-router'
import AddVehiclePage from '../AddVehiclePage/AddVehiclePage';
import { withRouter } from 'react-router';



class NewIncidentPage extends Component {
    goToAddNewImage = () => {
        this.props.history.push('image');
    }



componentDidMount() {
        this.getWitnesses();
    

    }

    getWitnesses = () => {
        const action = { type: 'GET_WITNESSES' };
        this.props.dispatch(action);
        console.log('action', action);
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
                <DisplayImages history={this.props.history} />
                <DisplayVehicless addNewVehicle={this.addNewVehicle}/>
                <DisplayWitnesses/>
                <DisplayFacts/>
            </div>

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NewIncidentPage);