import React, { Component } from 'react';
import { connect } from 'react-redux';
import IncidentInput from '../IncidentInput/IncidentInput';
import AddImagePage from '../AddImagePage/AddImagePage';
import AddVehiclePage from '../AddVehiclePage/AddVehiclePage';
import AddWitnessPage from '../AddWitnessPage/AddWitnessPage';


class CardImages extends Component {

    constructor() {
        super();
        
        this.state= {
            card: ''
        }
    }

    display = (event) => {
        console.log('images card', this.state);
        this.setState({
            card: 'image'
        })
    }
    
    
    goToAddNewImage = () => {
        this.props.history.push('image');
    }

  


    render() {
   
        // const { classes } = props;
        return (

            <div class="card-deck">
                <div class="card btn-spl">
                    <img class="card-img-top" src="/camera-4-xxl.png" alt="Card image cap" />
                    <div class="card-block">
                        <h4 class="card-title">Images</h4>
                        <p class="card-text">Upload scene and Damage Photos Here.</p>
                        <button class="btn btn-primary btn-spl" onClick={this.goToAddNewImage} href="#" role="button">Upload Photos</button>
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

export default connect(mapStateToProps)(CardImages);