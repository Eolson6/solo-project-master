import React, { Component } from 'react';
import { connect } from 'react-redux';

class WitnessPage extends Component {

    render() {
        return (
            <div>
                <h1>WitnessPage </h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(WitnessPage );