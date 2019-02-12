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



    render() {
        // const { classes } = props;
        return (
            <div>
          
                <TextField
                    id="image"
                    label="image"
                    defaultValue="No Images Added"
                    className="textField"
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                />
                <Button variant="contained" color="secondary" className="button">
                    Secondary
      </Button>
            </div>

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(DisplayImages);