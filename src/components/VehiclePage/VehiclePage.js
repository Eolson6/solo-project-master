import React, { Component } from 'react';
import { connect } from 'react-redux';

class VehiclePage extends Component {

    render() {
        return (
            <div>
                <h1>VehiclePage</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(VehiclePage);