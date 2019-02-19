import React, { Component } from 'react';
import { connect } from 'react-redux';
import IncidentInput from '../IncidentInput/IncidentInput';
import AddImagePage from '../AddImagePage/AddImagePage';
import AddVehiclePage from '../AddVehiclePage/AddVehiclePage';
import AddWitnessPage from '../AddWitnessPage/AddWitnessPage';

class CardPassengers extends Component {

    constructor() {
        super();

        this.state = {
            display: ''
        }
        console.log('new state', this.state);

    }

    display = (state) => {
        this.setState({

            display: "passenger"
        })

        let displayAccidentGuide = '';
        console.log('handle change', this.state);

        if (this.state.display = "image") {
            displayAccidentGuide =
                <AddImagePage />
        } else if
            (this.state.display = "incident") {
            displayAccidentGuide =
                <IncidentInput />
        } else if
            (this.state.state = "vehicle") {
            displayAccidentGuide =
                <AddVehiclePage />
        } else {
            displayAccidentGuide =
                <AddWitnessPage />
        }

    }



    

    render() {
        // const { classes } = props;
        return (

            <div class="card-deck">
                <div class="card btn-spl">
                    <img class="card-img-top" src="/download.jpg" alt="Card image cap" />
                    <div class="card-block">
                        <h4 class="card-title">Passengers</h4>
                        <p class="card-text">Record passenger contact information here. Best to do after adding a vehicle.</p>
                        <button class="btn btn-primary btn-spl" onClick={this.props.display} href="#" role="button">Add Passengers</button>
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

export default connect(mapStateToProps)(CardPassengers);