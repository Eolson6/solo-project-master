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
        // window.location.reload()
    }

    // //talks to saga with action type- gets info from reducer
    // handleImageID = (event) => {
    //     console.log('handleDeleteImages', { id: event.target.value });
    //     this.setState({
    //         id: event.target.value
    //     });
    // }


    goToAddNewImage = () => {
        this.props.history.push('/image');
    }



    render() {
        // const { classes } = props;
       
        return (
            <div>
                {this.props.reduxStore.imageReducer.imageReducer.map((image, i) => {
                    return (<tr key={i}>
                        
                        <h1>{image.image_description}</h1>
                         
                        <button class="button-delete" onClick={this.deleteImage} value={image.id} >
                            Delete Images
                                        </button>
                    </tr>
                    )
                })}
                <button class="button-add" onClick={this.goToAddNewImage}Link to="/image">
                    Add Image
                </button>
            </div>

        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});
export default connect(mapStateToProps)(DisplayImages);