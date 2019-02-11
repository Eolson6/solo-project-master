import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewIncidentPage extends Component {

    render() {
        return (
            <div>
                <h1>NewIncidentPage</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(NewIncidentPage);