import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import { EventEmitter } from 'events';
import axios from 'axios';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';



class DisplayFacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }


    componentDidMount() {
        this.getFacts();

    }

    getFacts = () => {
        const action = { type: 'GET_FACTS' };
        this.props.dispatch(action);
        console.log('action', action);


    }

    deleteFacts = (event) => {
        console.log('in delete', this.props.facts);
        this.setState({
            id: event.target.value

        });
        const action = { type: 'DELETE_FACT', payload: event.target.value }
        this.props.dispatch(action)
        window.location.reload()
    }

    // //talks to saga with action type- gets info from reducer
    // handleImageID = (event) => {
    //     console.log('handleDeleteImages', { id: event.target.value });
    //     this.setState({
    //         id: event.target.value
    //     });
    // }



    render() {
        // const { classes } = props;
        return (
            <div>
                {this.props.reduxStore.factReducer.factReducer.map((fact, i) => {
                    return (<tr key={i}>
                        <TextField
                            id="Facts"
                            label="Facts"
                            defaultValue={fact.location}
                            className="textField"
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <Button onClick={this.deleteFacts} value={fact.id} variant="contained" color="secondary" className="button" >
                            Delete Facts
                                        </Button>
                    </tr>
                    )
                })}
                <Button onClick={this.redirectAddNewFact} variant="contained" color="secondary" className="button" Link to="/facts">
                    Add Facts
      </Button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayFacts);