import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardVehicle extends Component {

    display = () => {
        // const action = { type: 'GET_VEHICLE' };
        // this.props.dispatch(action);
        // console.log('action', action);
        
    }

    goToAddNewVehicle = () => {
        this.props.history.push('vehicle')
    }

    render() {
        // const { classes } = props;
        return (

                <div class="card-deck">
                    <div class="card btn-spl">
                        <img class="card-img-top" src="https://img.webnots.com/2017/04/Bootstrap-Card-Image.png" alt="Card image cap"/>
                            <div class="card-block">
                                <h4 class="card-title">Vehicle</h4>
                                <p class="card-text">Record the information of the vehicle's invovled here.</p>
                                <button class="btn btn-primary btn-spl" onClick={this.goToAddNewVehicle} href="#" role="button">Add new Vehicle</button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Here is a footer</small>
                            </div>
                    </div>
                </div>
                          
                   );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(CardVehicle);