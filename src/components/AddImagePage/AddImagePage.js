import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import { get } from 'http';
import NewIncidentPage from '../NewIncidentPage/NewIncidentPage';


class AddImagePage extends Component {

    componentDidMount(){
            this.getCurrentId();
    }

    getCurrentId = () => {
        const action = { type: 'GET_CURRENT_ID_SAGA' };
        this.props.dispatch(action);
        console.log('get id', action);


    }

    addNewImage = (event) => {
        const newImage = {
            image_path: this.state.image_path,
            image_description: this.state.image_description,
            incident_id: [this.props.reduxState.getIdReducer]
        }
        const action = { type: 'ADD_NEW_IMAGE', payload: newImage };
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
       
        image_path: '',
        image_description: '',
        
    };

    handleChange = image_path => event => {
        // console.log('name', this.state);

        this.setState({
            [image_path]: event.target.value
        });
    };

    handleChange = image_description => event => {
        // console.log('name', this.state);

        this.setState({
            [image_description]: event.target.value
        });
    };



    render() {
        const { classes } = this.props;
        return (
            <form className="text" noValidate autoComplete="off">
                      <TextField
                    id="image_path"
                    label="Image Path"
                    value={this.state.value}
                    onChange={this.handleChange('image_path')}
                    margin="normal"
                />
                <TextField
                    id="image_description"
                    label="Image Description"
                    value={this.state.value}
                    onChange={this.handleChange('image_description')}
                    margin="normal"
                />
                
                    <Button onClick={this.addNewImage} variant="outlined" color="primary" className="button" Link to="/newIncident">
                        Submit
                    </Button>

                {JSON.stringify(this.props.reduxState.getIdReducer)}

            </ form >

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddImagePage);