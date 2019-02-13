import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';


class AddImagePage extends Component {

    addNewImage = (event) => {

        const action = { type: 'ADD_NEW_IMAGE', payload: this.state };
        this.props.dispatch(action);
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
        incident_id: '',
        image_path: '',
        description: ''
    };

    handleChange = name => event => {
        // console.log('name', this.state);

        this.setState({
            [name]: event.target.value
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <form className="text" noValidate autoComplete="off">
                      <TextField
                    id="image_path"
                    label="image_path"
                    value={this.state.value}
                    onChange={this.handleChange('image_path')}
                    margin="normal"
                />
                <TextField
                    id="description"
                    label="description"
                    value={this.state.value}
                    onChange={this.handleChange('description')}
                    margin="normal"
                />
                <div>
                    <Button onClick={this.addNewImage} variant="outlined" color="primary" className="button">
                        Submit
                    </Button>
                </div>

            </ form >

        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AddImagePage);