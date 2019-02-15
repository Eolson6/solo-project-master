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



class DisplayImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }


    componentDidMount() {
        this.getImages();

    }

    getImages = () => {
        const action = { type: 'GET_IMAGES' };
        this.props.dispatch(action);
        console.log('action', action);



    }

    deleteImage = (event) => {
        console.log('in delete', this.props.image);
        this.setState({
            id: event.target.value

        });
        const action = { type: 'DELETE_IMAGE', payload: event.target.value }
        this.props.dispatch(action)
        // window.location.reload()
    }

    // //talks to saga with action type- gets info from reducer
    // handleImageID = (event) => {
    //     console.log('handleDeleteImages', { id: event.target.value });
    //     this.setState({
    //         id: event.target.value
    //     });
    // }


    goToAddNewImage = () => {
        this.props.history.push('/image');
    }



    render() {
        // const { classes } = props;
        { JSON.stringify(this.props) }
        return (
            <div>
                {this.props.reduxStore.imageReducer.imageReducer.map((image, i) => {
                    return (<tr key={i}>
                        <TextField
                            id="image"
                            label="image"
                            defaultValue={image.image_description}
                            className="textField"
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <Button onClick={this.deleteImage} value={image.id} variant="contained" color="secondary" className="button" >
                            Delete Images
                                        </Button>
                    </tr>
                    )
                })}
                <Button onClick={this.goToAddNewImage} variant="contained" color="secondary" className="button" Link to="/image">
                    Add Image
                </Button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayImages);