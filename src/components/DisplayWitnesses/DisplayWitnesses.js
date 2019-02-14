
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

                            </tr>
                            )
                                })}
            }
              
              
      
                <Button variant="contained" color="secondary" className="button">
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