import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';



class DisplayImages extends Component {

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        const action = { type: 'GET_IMAGES' };
        this.props.dispatch(action);
        console.log('action', action);

    }



    render() {
        // const { classes } = props;
        return (
            <div>
                {this.props.reduxStore.imageReducer.imageReducer.map((image, i) =>{
                    return (<tr>
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
                    </tr>
                    )
                })}
                <Button onClick={this.addNewImage} variant="contained" color="secondary" className="button">
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