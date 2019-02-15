
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';



class DisplayWitnesses extends Component {

    componentDidMount() {
        this.getWitnesses();
    }

    getWitnesses = () => {
        const action = { type: 'GET_WITNESSES' };
        this.props.dispatch(action);
        console.log('action', action);
        

    }
    deleteWitness = (event) => {
        console.log('in delete image', event.target.value);
        this.setState({
            id: event.target.value
        });
        const action = { type: 'DELETE_WITNESS', payload: event.target.value }
        this.props.dispatch(action)
        window.location.reload()
    };

    //talks to saga with action type- gets info from reducer
    // handleDeleteID = (event) => {
    //     console.log('handleDeletewitness', { id: event.target.value });
    //     this.setState({
    //         id: event.target.value
    //     });
    // }



    render() {
        // const { classes } = props;
        return (
            <div>
                {this.props.reduxStore.witnessReducer.witnessReducer.map((witness,i)=>{
                            return (<tr>
                                <TextField
                                    id="witness"
                                    label="witness"
                                    defaultValue={witness.name}
                                    className="textField"
                                    margin="normal"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    variant="outlined"
                                    
                                />
                                <Button onClick={this.deleteWitness} value={witness.id} variant="contained" color="secondary" >
                                    Delete Witness
                                        </Button>
                            </tr>
                            )
                                })}
        
              
              
      
                <Button variant="contained" color="secondary" className="button" Link to="/witness">
                    Add Witness
      </Button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(DisplayWitnesses);