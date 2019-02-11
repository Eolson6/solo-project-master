import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {

    render() {
        return (
            <div>
                <h1>ReviewPage</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ReviewPage);