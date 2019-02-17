import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class DisplayImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
        }
    }


    componentDidMount() {
        this.getImages();

    }

    getImages = () => {
        const action = { type: 'GET_IMAGES' };
        this.props.dispatch(action);
        console.log('action', action);

    }

    deleteImage = (event) => {
        console.log('in delete', this.props.image);
        this.setState({
            id: event.target.value

        });
        const action = { type: 'DELETE_IMAGE', payload: event.target.value }
        this.props.dispatch(action)
    }


    goToAddNewImage = () => {
        this.props.history.push('/image');
    }

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