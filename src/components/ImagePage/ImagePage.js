import React, { Component } from 'react';
import { connect } from 'react-redux';

class ImagePage extends Component {

    render() {
        return (
            <div>
                <h1>ImagePage</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ImagePage);