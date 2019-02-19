import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Intersection extends Component {


    render() {
        // const { classes } = props;

        return (
            <div>
                {this.props.reduxStore.imageReducer.imageReducer.map((image, i) => {
                    return (<tr key={i}>
                        <h3>Sceen and Damage Photos</h3>
                        <h4>{image.image_description}</h4>

                        <button class="button-delete" onClick={this.deleteImage} value={image.id}>
                            Delete Image
                                        </button>
                    </tr>


                    )
                })}

            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayImages);